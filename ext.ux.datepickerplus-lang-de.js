/*
  * Ext.ux.DatePickerPlus  Addon
  * Ext.ux.form.DateFieldPlus  Addon  
  *
  * @author    Marco Wienkoop (wm003/lubber)
  * @copyright (c) 2008, Marco Wienkoop (marco.wienkoop@lubber.de) http://www.lubber.de
  *
*/
// Be sure to include this AFTER the datepickerwidget in your html-files

//Localize datepickerplus-specific text and holidays to German
if(Ext.ux.DatePickerPlus){
	Ext.apply(Ext.ux.DatePickerPlus.prototype, {
		weekName:	'KW',
		selectWeekText : 'Hier klicken, um alle Tage dieser Woche auszuwählen',
		selectMonthText : 'Hier klicken, um alle Wochen dieses Monats auszuwählen',
		maxSelectionDaysTitle: 'Datumsauswahl',
		maxSelectionDaysText: 'Es können maximal %0 Tage ausgewählt werden',
		undoText: "Rückgängig",
		displayMaskText: 'Bitte warten...',
		nextYearText: "Nächstes Jahr (Strg/Control+Hoch)",
		prevYearText: "Vorheriges Jahr (Strg/Control+Runter)",
		
		nationalHolidays: function(year) {
			year = (typeof year === "undefined" ? (this.lastRenderedYear ? this.lastRenderedYear : new Date().getFullYear()) : parseInt(year,10));


			var holidays = 
			[{
				text: "Neujahr",
				date: new Date(year,0,1)
			},
			{
				text: "Karfreitag",
				date: Ext.util.EasterDate(year,-2)
			},
			{
				text: "Ostersonntag",
				date: Ext.util.EasterDate(year)
			},
			{
				text: "Ostermontag",
				date: Ext.util.EasterDate(year,1)
			},
			{
				text: "Christi Himmelfahrt",
				date: Ext.util.EasterDate(year,39)
			},
			{
				text: "Pfingstsonntag",
				date: Ext.util.EasterDate(year,49)
			},
			{
				text: "Pfingstmontag",
				date: Ext.util.EasterDate(year,50)
			},
			{
				text: "Tag der Arbeit",
				date: new Date(year,4,1)
			},
			{
				text: "Tag der deutschen Einheit",
				date: new Date(year,9,3)
			},
			{
				text: "Heiligabend",
				date: new Date(year,11,24)
			},
			{
				text: "1. Weihnachstfeiertag",
				date: new Date(year,11,25)
			},
			{
				text: "2. Weihnachstfeiertag",
				date: new Date(year,11,26)
			},
			{
				text: "Sylvester",
				date: new Date(year,11,31)
			}];
			
			return holidays;
		}
	});
   
}
