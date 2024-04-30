## 8.0.2 (30 Apr 2024)
* Support for react 19
* Dropped support for react < 16.8 (already broken in a pervious update)

## 8.0.1 (10 Jan 2023)
* Fixing overriding of unrelated props

## 8.0.0 (25 Oct 2022)
* Breaking change: Fixed x and y co-ordinates being flipped in pathfunc
* Right-to-left support
* Fixed margins not being applied properly

## 7.0.6 (21 Oct 2022)
* Fixing cleanup of finished animations

## 7.0.5 (21 Oct 2022)
* Fixing cleanup of unfinished animations

## 7.0.4 (21 Oct 2022)
* Reducing bundle size
* Rewriting to use functional components

## 7.0.3 (11 Feb 2022)
* Moving RFDC from dependency to dev dependency

## 7.0.2 (9 Feb 2022)
* Fixing preinstall script causes install failure

## 7.0.1 (9 Feb 2022)
* Fixing non-string node labels

## 7.0.0 (10 Jan 2022)
* Breaking change: Single default export replaced with two named exports
* Support for tree shaking
* Significantly reduces bundle size, reduced even further if not using animations

### Migrating:
* If you were using `animated=true`, use the named `AnimatedTree` export
* Otherwise, use the named `Tree` export
* The `animated` prop is no longer used and can be removed

## 6.1.0 (29 Nov 2021)
* Support for react 18

## 6.0.1 (17 Jun 2021)
* Removing unneeded files from npm package

## 6.0.0 (9 Feb 2021)
* Breaking change: Dropped support for IE (reduces bundle size by about 1/3)
* Updated to d3 2.0.0

## 5.1.1 (8 Feb 2021)
* Added support for react 17 as a peer dependency

## 5.1.0 (27 Jun 2020)
* Adding support for image

## 5.0.0 (19 Jun 2020)
* Breaking change: Adding support for rect and polygon
* Breaking change: Allowing textProps to override default offsets
* Breaking change: Fixing incorrect default offsets
* Breaking change: Wrapping nodes and links in a <g> node for easier transformations

### Migrating:
* If you were using `circleProps`, use `nodeProps` instead. The format is the same
* If you were using `nodeRadius`, instead pass an `r` prop through `nodeProps`
* If you were using `nodeOffset`, instead pass a `dy` prop through `textProps`
* If you had css selectors relying on the `path` and `g` nodes being immediate children of `svg`, you will have to modify these due to the additional `g` node inbetween
* If you weren't using `nodeOffset`, node text position will change slightly

## 4.1.1 (5 Jun 2020)

* Fixed incorrect proptype (thanks @josh-stevens)

## 4.1.0 (16 Mar 2020)

* Added pathFunc prop to configure custom paths

## 4.0.1 (12 Aug 2019)

* Fixing default classname being removed when any props configured

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
