## 4.0.0 (11 Feb 2019)

* Breaking change: additional parameters are now passed in after the event parameter
* Added support for additional parameters in arbitrary event handlers

## 3.3.0 (7 Feb 2019)

* onContextMenu handlers for nodes and links now have the same additional parameters as onClick (thanks @Linton-Samuel-Dawson)

## 3.2.0 (24 Sep 2018)

* Adding rendering of custom children

## 3.1.1 (21 Apr 2018)

* Replaced webpack with rollup for smaller bundle size and better performance

## 3.1.0 (21 Dec 2017)

* Changed babel transform settings to reduce minified bundle size

## 3.0.0 (16 Dec 2017)

* New props for adding any prop to any DOM element
	* circleProps
	* gProps
	* pathProps
	* svgProps
	* textProps
* Redundant props have been removed
	* linkClassName
	* linkClassHandler
	* nodeClassName
	* nodeClassHandler
	* treeClassName
	* treeClickHandler

## 2.0.0 (12 Jul 2017)

* Animations
	* Significant performance improvements on large trees (tested with > 150 nodes)
	* Added nodes now animate from the position of the closest, previously visible, ancestor
	* Removed nodes now animate to the position of the closest, remaining ancestor
* Renamed Class props to ClassName props
* Added importing of polyfills for IE support

## 1.7.2 (7 Jul 2017)

* Fixing initial position of added animated nodes when root moves

## 1.7.1 (4 Jul 2017)

* Updating built files to include change in previous version

## 1.7.0 (26 Jun 2017)

* Added treeClass and treeClickHandler props

## 1.6.0 (24 Jun 2017)

* Adding animations

## 1.5.0 (13 May 2017)

* Removed warnings in react 15.5+

## 1.4.0 (29 Apr 2017)

* Added getChildren prop

## 1.3.0 (14 Apr 2017)

* Node and click handlers now have event as a second parameter (thanks @ronaldborman)

## 1.2.3 (11 Apr 2017)

* Updating built files to include change in previous version

## 1.2.2 (11 Apr 2017)

* Fixed undefined being passed into Link's onClick handler

## 1.2.1 (29 Mar 2017)

* Using d3-hierarchy instead of d3. This should significantly reduce bundle size

## 1.2.0 (5 Mar 2017)

* Upgraded dependencies, including webpack to 2.x
* Included a CSS file for basic styling

## 1.1.0 (14 Dec 2016)

* Upgraded d3 dependency to 4.4.0
* Included a minified file

## 1.0.1 (11 Dec 2016)

* Removing an npm shrinkwrap file. Its presence caused duplicate dependencies to be installed when react-tree-graph was installed

## 1.0.0 (11 Dec 2016)

* Initial release
