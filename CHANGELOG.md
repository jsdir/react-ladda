# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [3.0.0] - 2015-07-11
### Changed
- New props for `LaddaButton` that do not collide with existing element props (`buttonStyle` instead of `style`)
- Gave `LaddaButton` ownership of the `button` component. Any props applied to the `LaddaButton` are applied to the wrapped `button`. The children of the `LaddaButton` are rendered inside `ladda-label`.
