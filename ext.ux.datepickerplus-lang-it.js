/*
  * Ext.ux.DatePickerPlus  Addon
  * Ext.ux.form.DateFieldPlus  Addon  
  *
  * @author    Marco Wienkoop (wm003/lubber)
  * @copyright (c) 2008, Marco Wienkoop (marco.wienkoop@lubber.de) http://www.lubber.de
  *
  * translation by Andrea Batazzi (andreabat)
  * @copyright (c) 2008, Andrea Batazzi (andrea.batazzi@gmail.com) 
  *
*/
// Be sure to include this AFTER the datepickerwidget in your html-files

//Use this as a start to create you own language-file.
//Post it to the ext-forum, if you are done! :)
if(Ext.ux.DatePickerPlus){
	Ext.apply(Ext.ux.DatePickerPlus.prototype, {
		weekName : "Set.",
		selectWeekText : "Clicca per selezionare tutti i giorni di questa settimana",
		selectMonthText : "Clicca per selezionare tutte le settimane per questo mese",
		maxSelectionDaysTitle: 'Seleziona Data',
		maxSelectionDaysText: 'Puoi selezionare al massimo %0 giorni',
		undoText: "Annulla",
		displayMaskText: 'Attendere...',
		nextYearText: "Anno Prossimo (Control+Su)",
		prevYearText: "Anno Precedente (Control+Giu)",
		nationalHolidays: function(year) {
			year = (typeof year === "undefined" ? (this.lastRenderedYear ? this.lastRenderedYear : new Date().getFullYear()) : parseInt(year,10));
	//per default the US national holidays are calculated (according to http://en.wikipedia.org/wiki/Public_holidays_of_the_United_States) 
	//override this function in your local file to calculate holidays for your own country
	//but remember to include the locale file _AFTER_ datepickerplus !
			 
	
			var holidays = 
			[{
				text: "Capodanno",
				date: new Date(year,0,1)
			},
			{
				text: "Epifania",
				date: new Date(year,0,6)
			},
			{
				text: "Pasqua",
				date: Ext.util.EasterDate(year)
			},
			{
				text: "Lunedì dell'Angelo",
				date: Ext.util.EasterDate(year,1)
			},
			{
				text: "Festa della Liberazione",
				date: new Date(year,3,25)
			},
			{
				text: "Festa dei Lavoratori",
				date: new Date(year,4,1)
			},
			{
				text: "Festa della Repubblica",
				date: new Date(year,5,2)
			},
			{
				text: "Ferragosto",
				date: new Date(year,7,15)
			},
			{
				text: "Ognissanti",
				date: new Date(year,10,1)
			},
			{
				text: "Immacolata Concezione",
				date: new Date(year,11,8)
			},
			 
			{
				text: "Natale",
				date: new Date(year,11,25)
			},
			{
				text: "Santo Stefano",
				date: new Date(year,11,26)
			}
			
			];
			
			return holidays;
		}
	});
   
}
