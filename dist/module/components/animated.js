import _extends from '@babel/runtime/helpers/extends';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Container from './container.js';

function Animated(props) {
  const initialX = props.nodes[0].x;
  const initialY = props.nodes[0].y;
  const [state, setState] = useState({
    nodes: props.nodes.map(n => ({
      ...n,
      x: initialX,
      y: initialY
    })),
    links: props.links.map(l => ({
      source: {
        ...l.source,
        x: initialX,
        y: initialY
      },
      target: {
        ...l.target,
        x: initialX,
        y: initialY
      }
    }))
  });
  const [animation, setAnimation] = useState(null);
  useEffect(animate, [props.nodes, props.links]);
  function animate() {
    // Stop previous animation if one is already in progress.  We will start the next animation
    // from the position we are currently in
    clearInterval(animation);
    let counter = 0;

    // Do as much one-time calculation outside of the animation step, which needs to be fast
    const animationContext = getAnimationContext(state, props);
    const interval = setInterval(() => {
      counter++;
      if (counter === props.steps) {
        clearInterval(interval);
        setState({
          nodes: props.nodes,
          links: props.links
        });
        return;
      }
      setState(calculateNewState(animationContext, counter / props.steps));
    }, props.duration / props.steps);
    setAnimation(interval);
    return () => clearInterval(animation);
  }
  function getAnimationContext(initialState, newState) {
    // Nodes/links that are in both states need to be moved from the old position to the new one
    // Nodes/links only in the initial state are being removed, and should be moved to the position
    // of the closest ancestor that still exists, or the new root
    // Nodes/links only in the new state are being added, and should be moved from the position of
    // the closest ancestor that previously existed, or the old root

    // The base determines which node/link the data (like classes and labels) comes from for rendering

    // We only run this once at the start of the animation, so optimisation is less important
    const addedNodes = newState.nodes.filter(n1 => initialState.nodes.every(n2 => !areNodesSame(n1, n2))).map(n1 => ({
      base: n1,
      old: getClosestAncestor(n1, newState, initialState),
      new: n1
    }));
    const changedNodes = newState.nodes.filter(n1 => initialState.nodes.some(n2 => areNodesSame(n1, n2))).map(n1 => ({
      base: n1,
      old: initialState.nodes.find(n2 => areNodesSame(n1, n2)),
      new: n1
    }));
    const removedNodes = initialState.nodes.filter(n1 => newState.nodes.every(n2 => !areNodesSame(n1, n2))).map(n1 => ({
      base: n1,
      old: n1,
      new: getClosestAncestor(n1, initialState, newState)
    }));
    const addedLinks = newState.links.filter(l1 => initialState.links.every(l2 => !areLinksSame(l1, l2))).map(l1 => ({
      base: l1,
      old: getClosestAncestor(l1.target, newState, initialState),
      new: l1
    }));
    const changedLinks = newState.links.filter(l1 => initialState.links.some(l2 => areLinksSame(l1, l2))).map(l1 => ({
      base: l1,
      old: initialState.links.find(l2 => areLinksSame(l1, l2)),
      new: l1
    }));
    const removedLinks = initialState.links.filter(l1 => newState.links.every(l2 => !areLinksSame(l1, l2))).map(l1 => ({
      base: l1,
      old: l1,
      new: getClosestAncestor(l1.target, initialState, newState)
    }));
    return {
      nodes: changedNodes.concat(addedNodes).concat(removedNodes),
      links: changedLinks.concat(addedLinks).concat(removedLinks)
    };
  }
  function getClosestAncestor(node, stateWithNode, stateWithoutNode) {
    let oldParent = node;
    while (oldParent) {
      let newParent = stateWithoutNode.nodes.find(n => areNodesSame(oldParent, n));
      if (newParent) {
        return newParent;
      }
      oldParent = stateWithNode.nodes.find(n => (props.getChildren(n) || []).some(c => areNodesSame(oldParent, c)));
    }
    return stateWithoutNode.nodes[0];
  }
  function areNodesSame(a, b) {
    return a.data[props.keyProp] === b.data[props.keyProp];
  }
  function areLinksSame(a, b) {
    return a.source.data[props.keyProp] === b.source.data[props.keyProp] && a.target.data[props.keyProp] === b.target.data[props.keyProp];
  }
  function calculateNewState(animationContext, interval) {
    return {
      nodes: animationContext.nodes.map(n => calculateNodePosition(n.base, n.old, n.new, interval)),
      links: animationContext.links.map(l => calculateLinkPosition(l.base, l.old, l.new, interval))
    };
  }
  function calculateLinkPosition(link, start, end, interval) {
    return {
      source: {
        ...link.source,
        x: calculateNewValue(start.source ? start.source.x : start.x, end.source ? end.source.x : end.x, interval),
        y: calculateNewValue(start.source ? start.source.y : start.y, end.source ? end.source.y : end.y, interval)
      },
      target: {
        ...link.target,
        x: calculateNewValue(start.target ? start.target.x : start.x, end.target ? end.target.x : end.x, interval),
        y: calculateNewValue(start.target ? start.target.y : start.y, end.target ? end.target.y : end.y, interval)
      }
    };
  }
  function calculateNodePosition(node, start, end, interval) {
    return {
      ...node,
      x: calculateNewValue(start.x, end.x, interval),
      y: calculateNewValue(start.y, end.y, interval)
    };
  }
  function calculateNewValue(start, end, interval) {
    return start + (end - start) * props.easing(interval);
  }
  return /*#__PURE__*/React.createElement(Container, _extends({}, props, state));
}
Animated.propTypes = {
  getChildren: PropTypes.func.isRequired,
  keyProp: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  nodes: PropTypes.array.isRequired,
  duration: PropTypes.number.isRequired,
  easing: PropTypes.func.isRequired,
  steps: PropTypes.number.isRequired
};

export { Animated as default };
