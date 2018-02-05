/*
  * Ext.ux.DatePickerPlus  Addon
  * Ext.ux.form.DateFieldPlus  Addon  
  *
  * @author    Marco Wienkoop (wm003/lubber)
  * @copyright (c) 2008, Marco Wienkoop (marco.wienkoop@lubber.de) http://www.lubber.de
  *
*/
// Be sure to include this AFTER the datepickerwidget in your html-files

//Use this as a start to create you own language-file.
//Post it to the ext-forum, if you are done! :)
if(Ext.ux.DatePickerPlus){
	Ext.apply(Ext.ux.DatePickerPlus.prototype, {
		weekName : "Săpt.",
		selectWeekText : "Click pentru a selecta toate zilele din această săptămână",
		selectMonthText : "Click pentru a selecta toate săptămânile din această lună",
		maxSelectionDaysTitle: 'Alege data',
		maxSelectionDaysText: 'Puteți selecta maxim %0 zile',
		undoText: "Înapoi",
		displayMaskText: 'Vă rugăm așteptați...',
		nextYearText: "Anul următor (Control+Up)",
		prevYearText: "Anul anterior (Control+Down)",
		nationalHolidays: function(year) {
			year = (typeof year === "undefined" ? (this.lastRenderedYear ? this.lastRenderedYear : new Date().getFullYear()) : parseInt(year,10));
	//per default the US national holidays are calculated (according to http://en.wikipedia.org/wiki/Public_holidays_of_the_United_States) 
	//override this function in your local file to calculate holidays for your own country
	//but remember to include the locale file _AFTER_ datepickerplus !
			var dayOfJan01 = new Date(year,0,1).getDay();
			var dayOfFeb01 = new Date(year,1,1).getDay();
			var dayOfMay01 = new Date(year,4,1).getDay();
			var dayOfSep01 = new Date(year,8,1).getDay();
			var dayOfOct01 = new Date(year,9,1).getDay();
			var dayOfNov01 = new Date(year,10,1).getDay();		
	
			var holidays = 
			[{
				text: "Anul nou",
				date: new Date(year,0,1)
			},
			{
				text: "Ziua națională",
				date: new Date(year,11,1)
			},
			{
				text: "Ziua de Crăciun",
				date: new Date(year,11,25)
			}];
			
			return holidays;
		}
	});
   
}
