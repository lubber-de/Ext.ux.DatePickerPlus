# Ext.ux.DatePickerPlus - Enhanced DatePicker Component for ExtJS 3.x / 2.x
## Official Repository
###### Marco "[Lubber]" Wienkoop
![version](https://img.shields.io/github/tag/lubber-de/Ext.ux.DatePickerPlus.svg)  
![size_gzip](https://badges.herokuapp.com/size/github/lubber-de/Ext.ux.DatePickerPlus/master/ext.ux.datepickerplus.min.js?gzip=true)
![size](https://badges.herokuapp.com/size/github/lubber-de/Ext.ux.DatePickerPlus/master/ext.ux.datepickerplus.min.js)  
![browsers](https://badges.herokuapp.com/browsers?&microsoftedge=12,13,14%2b&googlechrome=All&versionDivider=true)
![browsers](https://badges.herokuapp.com/browsers?firefox=All&iexplore=8,9,10,11&versionDivider=true)
![mobile](https://badges.herokuapp.com/browsers?safari=5%2b&opera=10.5%2b&versionDivider=true)  
![license](https://img.shields.io/github/license/lubber-de/Ext.ux.DatePickerPlus.svg)  

## Features
Ext.ux.DatePickerPlus works in all forms: Standalone, as a DateMenu and as a DateField (in this case its the new Ext.ux.form.DateFieldPlus Widget)
Main Features:
- MultiMonth
- Multiselection with CTRL and SHIFT-Key as usual behaviour
- Weekend, Holidays and custom CSS days
- Weeknumber display
- Localization Support (example Files included)
- Quicktip support
- Undo Function of date selection

This small library is especially useful if you want to provide something in one single js file without copying all dependency libraries into it, but still rely on external resources/CDNs, so your single js file stays small and the user does not need to implement or even know what other dependencies are needed to be embedded  
So this library is tiny enough to be embedded into your own single-js file library

## Install

Implement one script tag after including ExtJs.
```html
<script type="text/javascript" src="ext.ux.datepickerplus-min.js"></script>
```
If needed, implement appropriate language file afterwards
```html
<script type="text/javascript" src="ext.ux.datepickerplus-lang-de.js"></script>
```

## API Documentation

### Config Items
**clickRepeaterConfig**: (usable when showPrevNextTrigger is true)  
Provide some clickRepeaterConfig to the trigger buttons

**showPrevNextTrigger**: (DateFieldPlus only and not with multiselection)  
To display 2 buttons next to the DateFieldPlus to select next/previous day(s)

**prevNextTriggerType**: (DateFieldPlus only not with multiselection)  
values:
"m": means +/- month (valid End of month will be considered)
any numeric value: means amount of +/- days

**defaultValue** (DateFieldPlus only)  
A String in Dateformat or a DateObject that will be used as initial value when open the picker on an empty datefieldplus

**prevNextDaysView**: `String/Boolean` (default "mark")  
values:
"mark" : selected days will be marked in prev/next months also
"nomark" will not be marked and are not selectable
false: will hide them, thus are not selectable too
Note: When using anything other than "mark", week or monthclick will not select days outside the current month!

**styleDisabledDates**: `Boolean` (default false)  
To be able to set custom style dates (eventdates/weekends..) on disabled dates also

**eventDatesSelectable**: `Boolean` (default false)  
To disable event-dates selection if desired (even if the dates are not disabled at all)

**disableSingleDateSelection**: `Boolean` (default false)  
To force user to use week- or monthselection only

**stayInAllowedRange** `Boolean` (default true)  
When setting minDate/maxDate, this will prevent to change months outside the allowed daterange  (suggested by descheret)

**summarizeHeader**: `Boolean` (default false)  
To add an optional global header when using multimonth display containing the month range (e.g. january 2008-october 2008)

**allowMouseWheel**: `Boolean` (default true)  
Self explaining...

**multiSelectionDelimiter**: `String` (default ',')  
For Datefieldplus and Multiselection only

**renderPrevNextButtons**: `Boolean` (default true)  
If you want the user not to be able to change the month or force him to use the monthpicker, set this to false

**renderPrevNextYearButtons**: `Boolean` (default false)  
Display 2 small double-arrow buttons for changing next/previous year 

**nextYearText**: `String` (default "Next Year (Control+Up)")  
Will be displayed as tooltip on NextYear Button (updated locale!)

**prevYearText**: `String` (default "Previous Year (Control+Down)")  
Will be displayed as tooltip on PrevYear Button (updated locale!)

**showActiveDate**: `Boolean` (default false)  
Will display the active Date to use keynavigation

**shiftSpaceSelect**: `Boolean` (default true)  
if set to true (default) and showactivedate is set to true you can select dates on keynavigation by using shift+Space (because the space-key alone will select the today-date)
if this is set to false , this behaviour reverses (shift+space selects today, space alone select the date under the shown activedate from keynavigation)
Remembery Keynavigation works only when the datepicker has got focus which isnt always the case in some browsers

**disableMonthPicker**: `Boolean` (default false)  
Self explaining...

**disabledLetter**: `String/Boolean` (default false)  
Display e.g. a "X" instead of the daynumber if a date is disabled.

**strictRangeSelect**: `Boolean` (default false)  
Set this to true does only allow multiselection in a range without the possibility to create gaps. Selection by CTRL is still possible, but DatepickerPLus checked, if the selected Day(s) append the existing selection of would produce a gap

**displayMask**: Number (default 3)  
As huge multimonth calendars can take some updating time this will display a mask when the noOfMonth property is higher than the given value in displayMask.
Set to false to never display the mask

**displayMaskText**: String (default "Please wait...")  
The Message to be displayed when a mask is shown

**defaultEventDatesText**: `String` (default '')  
Used if no text-object is given in eventdates

**defaultEventDatesCls**: `String` (default 'x-datepickerplus-eventdates')  
Used if no cls-object is given in eventdates

**allowedDates**: `Array{Dateobjects}/false` (default false)  
If this is set with an Array of Dates, only these Dates are available for Selection in the DatepickerPlus, all other dates are automatically disabled

**allowedDatesText**: `String` (default '')  
Text to display on the disabled Days as quicktip

**minDate**: `Date`  
Alias for minValue

**maxDate**: `Date`  
Alias for maxValue

**disablePartialUnselect** : `Boolean/String` (default true)  
When multiselecting whole months or weeks, already selected days within this week/month will _not_ get unselected anymore. Set this to false, if you want them to get unselected.
Note: When the _whole set_ of the month/week are already selected, they get _all_ unselected anyway.

**renderOkUndoButtons** : `Boolean` (default true)  
If set to false, the OK- and Undo-Buttons will not be rendered on Multiselection Calendars
This way any selected Date will be immediatly available in the "selectedDates" Array. If used together with DateMenu or DateFieldPlus you need to click outside the Calendar to make it disappear or press Return (if calendar got focus...)
Works only if multiSelection is set to true

**renderTodayButton** : `Boolean` (default true)  
Whether the Today-Button should be rendered

**noOfMonth** : `Number` (default 1)  
how many months should be displayed

**noOfMonthPerRow**: `Number` (default 3)

**fillupRows**: `Boolean` (default true)  
to automatically increase month-amount to fit display-matrix of rows/columns

**showWeekNumber** : `Boolean` (default true)  
to support display of weekNumbers

**selectWeekText** : `String` (default "Click to select all days of this week")  
Will be displayed when hovering over Weeknumber

**selectMonthText** : `String` (default "Click to select all weeks of this month")  
Will be displayed when hovering over WeeknumberHeader

**weekName** : `String` (default "Wk.")  
Text, that appears on the Weeknumber Header

**multiSelection** : `Boolean` (default false to act like original datepicker)  
Whether Multiselection should be possible or not

**multiSelectByCTRL**:  `Boolean` (default true)  
If set to false, its possible to multiselect the "easy" way (without CTRL) also

**selectedDates** : `Array`  
Holds an array of dateobjects which have been selected (after clicking the OK-Button, or immediatly, if renderOkUndoButtons is set to false)

**preSelectedDates** : `Array`  
Holds an array of date-times (getTime()) which have been selected at runtime (before clicking the OK-Button)

**nationalHolidays** : function(year) (default US Holidays)  
Called every year-change to generate holidays with custom CSS

**nationalHolidaysCls** : `String` (default to 'x-datepickerplus-nationalholidays')  
CSS Class to be applied to holidays

**markNationalHolidays** : `Boolean` (default true)  
Whether national Holidays should be marked with different CSS

**markWeekends** : `Boolean` (default true)  
Whether weekends should be marked with different CSS
Custom CSS Days can also be used for cycling weekevents like "every friday"

**weekendDays** : `Array` (default [6,0] for Saturday and Sunday)  
Array of weekdays which are supposed to be weekends

**weekendText** : `String` (default '')  
Text to be display as Quicktips when hovering over weekends

**useQuickTips** : `Boolean` (default true)  
To be able to show cellinfos in nice quicktips instead of cell-titles
Occurs for disabled/eventdates/weekends/holidays days

**pageKeyWarp** : Number(default 1)  
Extend pageup/pagedown keynav for custom amount of months forward/backward

**maxSelectionDays** : Boolean (default false for unlimited selection)  
To limit the selection of single days to a specific amount

**maxSelectionDaysTitle** : `String` (default 'Datepicker')  
Window-title of the alert-msg which is disdplayed when trying to select more than the allowed amount of days

**maxSelectionDaysText** : `String` (default 'You can only select a maximum amount of %0 days')  
Window-Contentext of the alert-msg which is disdplayed when trying to select more than the allowed amount of days (When translating this use %0 as placeholder for the amount of days)

**undoText** : `String` (default 'Undo')  
Buttontext for the Undo-option

**eventdates** : function(year)  
Returns days which are marked by a specific css class and not as selected

**eventDatesRE** : `RegExp` (default null)  
Regular Expression to select custom CSS Days (works just like disabledDaysRE)

**eventDatesRECls** : `String` (default '')  
CSS Class to be used if days are found by eventDatesRE

**eventDatesREText** : `String` (default '')  
Quicktip Text to be displayed if days are found by eventDatesRE

**lastSelectedDate** : `Number`  
Contains the last selected Date.. (getTime() value)

**tooltip** : `String/Object` (for DateFieldPlus only)  
Works exactly like in Buttons-Widget (works on Trigger Button, not field itself to keep invalidText tooltips intact!)

**tooltipType** : `String` (for DateFieldPlus only)
Works exactly like in Buttons-Widget

**usePickerPlus** : `Boolean` (for datemenus only)


### Events
**onPrevTriggerRelease** (DateFieldPlus only not with multiselection)  
Fires when the PrevTrigger MouseUp Event occurs (if omitted the usual select-handler will be triggered)

**onNextTriggerRelease** (DateFieldPlus only not with multiselection)  
Fires when the PrevTrigger MouseUp Event occurs (if omitted the usual select-handler will be triggered)

**beforemonthclick**  
Called with pickerobject, monthnumber (0=january,1=february...) and selectedState (if true, the whole month was selected, if false, it was unselected)
Fires only when multiSelection=true and showWeekNumbers=true. Return false to cancel selection.

**beforeweekclick**  
Called with pickerobject, date (firstdate of clicked week) and selectedState (if true, the whole week was selected, if false, it was unselected)
Fires only when multiSelection=true and showWeekNumbers=true. Return false to cancel selection.

**beforedateclick**  
Called with pickerobject and current clicked date
Fires before a date is clicked. Return false to cancel selection.

**beforemousewheel**  
Fires before the month will change on mousewheel trigger

**beforemaxdays**  
Fires before the default ext alertbox will appear when the amount of maxSelectionDays has been reached (return false to cancel the msgbox appearance)

**beforeyearchange**  
Fires everytime before the year of the first month changes (by monthpicker or prev/next(year)-month buttons

**afteryearchange**  
Fires everytime after the year of the first month changes (by monthpicker or prev/next(year)-month buttons

**beforemonthchange**  
Fires everytime before the first month changes (by monthpicker or prev/next-month buttons

**aftermonthchange**  
Fires everytime after the first month changes (by monthpicker or prev/next-month buttons

**aftermonthclick**  
Called with pickerobject, monthnumber (0=january,1=february...) and selectedState (if true, the whole month was selected, if false, it was unselected)
Fires only when multiSelection=true and showWeekNumbers=true

**afterweekclick**  
Called with pickerobject, date (firstdate of clicked week) and selectedState (if true, the whole week was selected, if false, it was unselected)
Fires only when multiSelection=true and showWeekNumbers=true

**afterdateclick**  
Called with pickerobject, current clicked date and selectedState (if true, the day was selected, if false, it was unselected)
Fires everytime a date is clicked

**undo**  
Fires on undo-button-click on multiSelection


### Methods
**setEventDates(Array{DateObjects}/Object{eventDatesObject(date,text,cls)})**  
To automatically transform given arrays/or objects to working functions, if not already specified

**setAllowedDates(Array{DateObject},update(default true)])**  
To set an Array of Dates to be available only at runtime and update the picker visually. If update is set to false, the visual update will not happen.

**clearSelectedDates([update(default true)])**  
To delete all selected dates and update the picker visually. If update is set to false, the visual update will not happen.

**setSelectedDates(Array/DateObject,update(default true)])**  
To set one or more Dates and update the picker visually. If update is set to false, the visual update will not happen.

**setDateLimit(minDate{DateObject},maxDate{DateObject})**  
To change both minDate and maxDate at one at runtime

**setMinDate({DateObject})**  
To change the minDate at runtime and immediatly update the rendered DatepickerPlus. You need to specify a valid DateObject

**setMaxDate({DateObject})**  
Same with the maxDate



## License
 [GPLv3](/LICENSE)