import React from 'react'
import { useState, useCallback, useEffect } from 'react'
import './index.css'
export default function Pagination({ total = 100, onChange = null }) {
  const [now, setNow] = useState(1);//*当前页码
  const [leftStepper, setLeftStepper] = useState(false); //*左侧的省略号
  const [rightStepper, setRightStepper] = useState(false);//*右侧的省略号
  const [$node, $setNode] = useState([]); //*节点渲染数组

  useEffect(function () {
    // initState()
    watcher(now)
  }, [])




  const watcher = useCallback(function (now) {
    setLeftStepper(now - 4 > 0)
    setRightStepper(now + 4 < total)
    if (now < 4) {
      $setNode([2, 3, 4, 5, 6])
    } else if (now >= total - 4) {
      $setNode([total - 5, total - 4, total - 3, total - 2, total - 1])
    } else {
      $setNode([now - 2, now - 1, now, now + 1, now + 2])
    }
  })

  const pageChanging = useCallback(num => {
    setNow(num)
    watcher(num)
    onChange && onChange(num)
  })

  const onPrev = useCallback(() => {
    if (now - 1 < 1) return
    pageChanging(now - 1)
  })


  const onNext = useCallback(() => {
    if (now + 1 > total) return
    pageChanging(now + 1)
  })


  const onSetStep = useCallback((distance) => {
    if (now + (distance) < 1) {
      pageChanging(1)
    } else if (now + (distance) > total) {
      pageChanging(total)
    } else {
      pageChanging(now + (distance))
    }
  })


  return <ul className="x-pagination-root x-clearfix">
    <li onClick={onPrev}>
      <button disabled={now == 1} className="x-pagination-item x-pagination-prev">上一页</button>
    </li>
    <li
      onClick={pageChanging.bind(null, 1)}
      className={now == 1 ? "x-pagination-item x-pagination-actived" : "x-pagination-item"}>1</li>
    {leftStepper && <li className="x-pagination-item x-pagination-point-prev" onClick={() => onSetStep(-5)}>
      <span className="x-pagination-left"></span>
    </li>}
    {
      $node.map(function (num, index) {
        return <li
          className={now == num ? "x-pagination-item x-pagination-actived" : "x-pagination-item"}
          key={index}
          onClick={pageChanging.bind(null, num)}
        >{num}</li>
      })
    }
    {rightStepper && <li
      className="x-pagination-item x-pagination-point-next" onClick={() => onSetStep(5)}>
      <span className="x-pagination-right"></span>
    </li>}
    {total > 1 && <li
      onClick={pageChanging.bind(null, total)}
      className={now == total ? "x-pagination-item x-pagination-actived" : "x-pagination-item"}>{total}</li>}
    <li onClick={onNext} >
      <button className="x-pagination-item x-pagination-next" disabled={now == total}>下一页</button>
    </li>
  </ul >
}