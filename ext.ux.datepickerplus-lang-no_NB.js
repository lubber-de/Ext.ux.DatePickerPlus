/*
  * Ext.ux.DatePickerPlus  Addon
  * Ext.ux.form.DateFieldPlus  Addon  
  *
  * @author    Marco Wienkoop (wm003/lubber)
  * @copyright (c) 2008, Marco Wienkoop (marco.wienkoop@lubber.de) http://www.lubber.de
  *
  * Norwegian translation (Bokmål: no-NB)  thanks to Alex Brasetvik
*/
// Be sure to include this AFTER the datepickerwidget in your html-files

//Use this as a start to create you own language-file.
//Post it to the ext-forum, if you are done! :)
if(Ext.ux.DatePickerPlus){
	Ext.apply(Ext.ux.DatePickerPlus.prototype, {
		weekName : "Uke",
		selectWeekText : "Trykk for å velge samtlige dager denne uka",
		selectMonthText : "Trykk for å velge samtlige uker denne måneden",
		maxSelectionDaysTitle: 'Datovelger',
		maxSelectionDaysText: "Du kan velge maks %0 dager",
		undoText: "Angre",
		displayMaskText: 'Vennligst vent...',
		nextYearText: "Neste år (Ctrl + Pil opp)",
		prevYearText: "Forrige år (Ctrl + Pil ned)",
		nationalHolidays: function(year) {
			year = (typeof year === "undefined" ? (this.lastRenderedYear ? this.lastRenderedYear : new Date().getFullYear()) : parseInt(year,10));
	//holidays are calculated (according to http://no.wikipedia.org/wiki/Helligdager_i_Norge) 
 	//but remember to include the locale file _AFTER_ datepickerplus !
			var holidays = 
			[{
				text: "første nyttårsdag",
				date: new Date(year,0,1)
			},
			{
				text: "palmesøndag",
				date: Ext.util.EasterDate(year,-7)
			},
			{
				text: "skjærtorsdag",
				date: Ext.util.EasterDate(year,-3)
			},
			{
				text: "langfredag",
				date: Ext.util.EasterDate(year,-2)
			},
			{
				text: "første påskedag",
				date: Ext.util.EasterDate(year)
			},
			{
				text: "andre påskedag",
				date: Ext.util.EasterDate(year,1)
			},
			{
				text: "offentlig høytidsdag",
				date: new Date(year,4,1)
			},
			{
				text: "grunnlovsdagen",
				date: new Date(year,4,17)
			},
			{
				text: "Kristi himmelfartsdag",
				date: Ext.util.EasterDate(year,39)
			},
			{
				text: "første pinsedag",
				date: Ext.util.EasterDate(year,49)
			},
			{
				text: "andre pinsedag",
				date: Ext.util.EasterDate(year,50)
			},
			{
				text: "første juledag",
				date: new Date(year,11,25)
			},
			{
				text: "andre juledag",
				date: new Date(year,11,26)
			}];
			
			return holidays;
		}
	});
   
}
