# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.4.6] - 2018-02-05
### Added
- support option "clickRepeaterConfig" to supply clickrepeater options for prevnext trigger buttons

## 1.4.5 - 2012-03-08
### Added
- minDate/maxDate to minText/maxText in Datepicker Core
- respect minDate/maxDate on prevnext trigger buttons

## 1.4.4 - 2012-03-08 
### Added
- checked to work with ExtJS 3.4.0
- an optional deleteTrigger on Datefield

### Fixed
- prevNextButtons when switching on days between summer/wintertime
- setMinDate throws Error, when value was not defined
- summarizeHeader got more height when showWeekNumber was set to false
- a white gap column appeared when showWeekNumber was set to false (only on latest chromium?)

## [1.4.3] - 2011-03-18
### Fixed
- Config wasn't set when used in Editorgridpanel

## 1.4.2 - 2011-02-23
### Added
- checked to work with ExtJS 3.3.1
- config: showPrevNextTrigger (DateFieldPlus only and not with multiselection) to display 2 buttons next to the DateFieldPlus
- config: prevNextTriggerType (DateFieldPlus only not with multiselection): m means +/- month (valid End of month will be considered), any numeric value means amount of +/- days
- Event "onPrevTriggerRelease", (DateFieldPlus only not with multiselection) which triggers when the PrevTrigger MouseUp Event occurs (if omitted the usual select-handler will be triggered)
- Event "onNextTriggerRelease", (DateFieldPlus only not with multiselection) which triggers when the PrevTrigger MouseUp Event occurs (if omitted the usual select-handler will be triggered)

### Fixed
- When specifying that weeknumbers should not be rendered and showing more than 1 row of months,the widths of daily columns in the 2nd and subsequent rows of months are too small.
- select event was triggered twice on Datefieldplus 
- When using strictRangeSelection all clicked dates outside gaps were still selected even when not displayed

## [1.4.1] - 2010-11-09
### Added
- checked to work with ExtJS 3.3.0

### Changed
- Forced to update viewport on setValue

### Fixed
- correctly position picker in datefield with hiddenfield on IE in some cases

## [1.4] - 2010-04-30
### Added
- checked to work with ExtJS 3.2.1
- romanian locale
- japanese locale
- polish locale

### Fixed
- Datepickers with shown months > 1 had a white glitch obove them
- CSS Fixes for Datemenus and more than 1 row of months  when using IE8 in Compatibility Mode

## [1.4 RC1] - 2010-03-04
### Added
- checked to work with ExtJS 3.1.1

### Changed
- spanish locale corrected (holiday had a leading zero)

### Fixed
- DateField Events did not work properly
- beforedestroy throws exception when parent control of datepickerplus gets destroyed

## [1.4 Beta 2] - 2009-09-18
### Added
- checked to work with ExtJS 3.0.0
- checked to work with ExtJS 2.3.0
- Adopted config item prevNextDaysView to DateFieldPlus
- Adopted events beforedateclick, beforeweekclick and beforemonthclick to DateFieldPlus
- more code optimization for Ext 3.0 compatibility
- support option "defaultvalue" on datefieldplus

### Fixed
- setDisabled did not work under Ext 3.0

## [1.4 Beta] - 2009-07-03
### Added
- checked to work with ExtJS 3.0-RC3
- checked to work with ExtJS 2.2.1
- support of jsondates  (e.g. "2008-08-04T12:22:00") in setEventDates, setSelectedDates, setAllowedDates,setMindate and setMaxdate
- some Code optimizations
- corrected holidays in german locale
- events beforedateclick, beforeweekclick and beforemonthclick
- dutch locale
- french locale
- Norwegian bokmål locale
- spanish locale
- version config
- config prevNextDaysView ("mark","nomark",false) to disable automatic selection/view of selected days of current months in previous and next month, so only the current months days are selectable

### Fixed
- select-event on datefieldplus was added again each time the trigger has been clicked
- Fix for updatehidden in case of multiselection
- do not handle dateselection when disabled-property is set

## [1.3] - 2008-08-05
### Added
- Support of ExtJS 2.2
- Adopted new config items from 1.2 to DateFieldPlus also

## 1.2 - 2008-08-04
### Added
- support "allowOtherMenus" Config for DateFieldPlus
- datefieldplus can be hidden by clicking the triggerbutton again in cases hiding by clicking outside isn't possible
- config "styleDisabledDates" to be able to set custom style dates (eventdates/weekends..) on disabled dates also
- config "eventDatesSelectable" to disble event-dates selection if desired (even if the dates are not disabled at all)
- config "disableSingleDateSelection" to force user to use week- or monthselection only
- config "stayInAllowedRange" when setting minDate/maxDate, this will prevent to change months outside the allowed daterange
- config "summarizeHeader" to add an optional global header when using multimonth display containing the month range (e.g. january 2008-october 2008)
- italian locale

### Fixed
- setMinDate/MaxDate/DateLimits did not update the viewport properly

## 1.1 Final - 2008-06-12
### Added
- config "allowMouseWheel" to generally turn on/off Mousewheelsupport
- event "beforemousewheel" to be able to temporary disable the mousewheel if desired
- event "beforemaxdays" to be able to cancel the default MessageBox but do something on your own instead
- Implemented fix for xdatefield code to support applyTo Config

### Changed
- updated russian local 

### Fixed
- updating eventclasses (and others) could result in wrong class-definition per cell

## 1.1 RC4 - 2008-05-20
### Added
- DateFieldPlus now also supports multiselection
- extended xdatefield to support multiselection
- "value" config for datefieldplus now also supports arrays in multiselection mode instead of just one date
- range selection is now also possible for a wider period than only the visible months
- updated xdatefield code integration to disable/enable the hidden submitfield from datefieldplus also, if the mainformfield gets disabled/enabled
- improved xdatefield code to fill the hiddenField with a given value at config time
- Improved some code-sections (mainly for respecting summertime changings when handling with Date.gettime())
- Corrected eventhandling on Datemenu and DateFieldPlus
- support for minDate and maxDate for Datefieldplus (as an alias for datepickers minValue and maxValue) to be more compatible to usual datepicker/datemenu config options
- "multiSelectionDelimiter" config (datefieldplus and multiselection only)
- "renderPrevNextButtons" config (if you want the user not to be able to change the month or force him to use the monthpicker)
- "renderPrevNextYearButtons" config to display 2 small double-arrow buttons for changing next/previous year 
- "nextYearText" config which will be displayed as tooltip on NextYear Button (updated locale!)
- "prevYearText" config which will be displayed as tooltip on PrevYear Button (updated locale!)
- "showActiveDate" will display the active Date to use keynavigation
- "shiftSpaceSelect" if set to true (default) and showactivedate is set to true you can select dates on keynavigation by using shift+Space (because the space-key alone will select the today-date)
	if this is set to false , this behaviour reverses (shift+space selects today, space alone select the date under the shown activedate from keynavigation)
- "disableMonthPicker" config
- "disabledLetter" config to display e.g. a "X" instead of the daynumber if a date is disabled. (default false)
- event "beforeyearchange"
- event "afteryearchange"
- russian locale

### Changed
- UP/DOWN/LEFT/RIGHT Keynavigation is now only available if showActiveDate is set to true and works much faster
- CTRL+UP/DOWN for year changing is now only available if either disableMonthPicker is false or renderPrevNextYearButtons is true
- CTRL+LEFT/RIGHT for month changing is now only available if either disableMonthPicker is false or renderPrevNextButtons is true

### Fixed
- setEventDates did not update the viewport
- Array-Cloning was done in a wrong way
- weekselection was wrong when a different startDay was given

## 1.0 RC3 - 2008-04-21
### Added
- checked to work with ExtJS 2.1
- config strictRangeSelect
- config displayMask and displayMaskText to support update masking (localization files also updated)
- config defaultEventDatesText and defaultEventDatesCls. used if no text/cls-object is given in eventdates
- Events "aftermonthchange" and "beforemonthchange" (fires everytime the first month changes (by monthpicker or prev/next-month buttons)
- method setEventDates, to automatically transform given arrays/or objects to working functions, if not already specified

### Fixed
- range selection over specific months was incorrect

## 1.0 RC2 - 2008-04-10
### Fixed
- typo in DateFieldPlus corrected

## 1.0 RC1 - 2008-04-10
### Fixed
- Undo-Function works again
- Config items allowedDates and allowedDatesText had no effect on DateFieldPlus

## 0.9 Beta 9 - 2008-04-09
### Added
- config items allowedDates and allowedDatesText
- method setAllowedDates()

## 0.9 Beta 8 - 2008-04-09
### Fixed
- setSelectedDates still had another Bug...

## 0.9 Beta 7 - 2008-04-08
### Added
- the state of the afterdateclick to examine, if the date was selected or unselected, same with week/month
- option to cleanSelectedDates to not update the picker (e.g. to immediatly add dates manually by setSelectedDates(that would call update twice)
- option to setSelectedDates to clean the selectedDates before setting the new once and to not update the picker

### Fixed
- setSelectedDates did not work properly

## 0.9 Beta 6 - 2008-04-08
### Added
- method clearSelectedDates()
- method setSelectedDates()

### Changed
- eventtriggering for afterdateclick. It will now always be fired when a date is clicked . Regardless, whether multiSelection is enabled or not.

### Fixed
- Given listeners to DateFieldPlus have been ignored

## 0.9 Beta 5 - 2008-04-07
### Added
- method setDateLimits() to change minDate and maxDate at once at runtime

### Fixed
- Range selection by using the SHIFT-Key for a range more than one month, did not select some remaining days at the end of the range

## 0.9 Beta 4 - 2008-04-06
### Added
- method setMinDate() to change the minDate at runtime and immediatly update the datepicker
- method setMaxDate() to change the maxDate at runtime and immediatly update the datepicker

### Fixed
- hidden submitformat Field had same name as original field, thus confuses IE with duplicate id/name. if name has not been specified in the config or is same as id datefieldplus will add a suffix to the hiddenfield (default "-format"). this field holds the custom submitFormat value

## 0.9 Beta 3 - 2008-04-06
### Added
- xtype "datefieldplus"

### Fixed
- DateFieldPlus accidently had renderTodayButton set to false by default...

## 0.9 Beta 2 - 2008-04-06
### Added
- new config options "disablePartialUnselect","renderOkUndoButtons" and "renderTodayButton"

### Fixed
- Width on DateMenu and DateFieldPlus was broken in Firefox 3 (tested on latest Beta 5)
- Some old testpath in generating transparent GIF images was left in the code and has been deleted now

## 0.9 Beta - 2008-04-05
### Added
Joined the extensions together nicely and added even more features:
- fixed some bugs/improved the original extensions a bit
- works on Original DateMenu and DateField (Ext.ux.DateFieldPlus) also
- Definable Multimonths (rows,amount,fill..)
- Custom CSS for definable days
- Weeknumber Display
- Weekend CSS Styling
- National Holidays CSS Styling
- Quicktip support
- Function based custom displayed days
- Multiselection support by CTRL-Key to add single days (when clicked on a date)
- Multiselection support by CTRL-Key to add single weeks (when clicked on a weeknumber)
- Multiselection support by CTRL-Key to add single months (when clicked on the weeknumber header)
- Multiselection support by SHIFT-Key to add a range of days depending on the lastclicked day (when clicked on a single date)
- returned the prev/next monthbuttons to the monthlabelrow
- implemented mousewheel-event again for comfortable increasing/decreasing months
- implemented monthpicker again to comfortably select the starting month. the monthpicker is rendered on the very first monthname so with only 1 month given, it acts just like the original datepicker
- added quick dayselection routine without calling update() every time. MUCH faster selection, especially when using huge multimonth calendars!
- added "OK"- and "Undo"-Buttons when multiSelection is set to true
- unneccessary renderupdate trigger eliminated (performance-leak on huge multimonthcalendars!) (setvalue-function changed, much more faster now)
- prevented opening a new browsertab in IE7/IE8 when CTRL multiselecting (occured in original multimonth calendar extension and datepicker also if clicked on an empty area within the cell) (default behaviour for a-tags, prevented this by CSS)
- extend keynavigation (RETURN=ok-Button, CTRL as usual)
- added Tooltip functionality to DateFieldPlus just like Buttons (tooltip show on triggerbutton only, this way invalidtext tooltips stay intact)




[1.4.6]: /../compare/v1.4.3...v1.4.6
[1.4.3]: /../compare/v1.4.1...v1.4.3
[1.4.1]: /../compare/v1.4...v1.4.1
[1.4]: /../compare/v1.4RC1...v1.4
[1.4 RC1]: /../compare/v1.4beta2...v1.4RC1
[1.4 Beta 2]: /../compare/v1.4beta...v1.4beta2
[1.4 Beta]: /../compare/v1.3...v1.4beta
[1.3]: /../compare/v1.2...v1.3

