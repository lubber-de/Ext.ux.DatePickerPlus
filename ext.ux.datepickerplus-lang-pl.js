/*
  * Ext.ux.DatePickerPlus  Addon
  * Ext.ux.form.DateFieldPlus  Addon  
  *
  * @author    Marco Wienkoop (wm003/lubber)
  * @copyright (c) 2008, Marco Wienkoop (marco.wienkoop@lubber.de) http://www.lubber.de
  *
  * translation by Maciej Bochynski (maboch)
  * @copyright (c) 2008, Maciej Bochynski (info@pwpages.net) 
  *
*/
// Be sure to include this AFTER the datepickerwidget in your html-files

//Use this as a start to create you own language-file.
//Post it to the ext-forum, if you are done! :)
if(Ext.ux.DatePickerPlus){
	Ext.apply(Ext.ux.DatePickerPlus.prototype, {
		weekName : "T",
		selectWeekText : "Kliknij aby zaznaczyć wszystkie dni tygodnia",
		selectMonthText : "Kliknij aby zaznaczyć wszystkie tygodnie tego miesiąca",
		maxSelectionDaysTitle: 'Kalendarz',
		maxSelectionDaysText: 'Możesz wybrać maksymalnie %0 dni',
		undoText: "Undo",
		displayMaskText: 'Proszę czekać...',
		nextYearText: "Następny rok (Control+Up)",
		prevYearText: "Poprzedni rok (Control+Down)",
		nationalHolidays: function(year) {
			year = (typeof year === "undefined" ? (this.lastRenderedYear ? this.lastRenderedYear : new Date().getFullYear()) : parseInt(year,10));
	
			var holidays = 
			[{
				text: "Nowy rok",
				date: new Date(year,0,1)
			},
			{
				text: "Święto Pracy",
				date: new Date(year,4,1)
			},
			{
				text: "Święto Konstytucji 3 Maja",
				date: new Date(year,4,3)
			},
			{
				text: "Wniebowzięcie Najświętszej Maryi Panny",
				date: new Date(year,7,15)
			},
			{
				text: "Wszystkich Świętych", //Narodowe Święto Niepodległości
				date: new Date(year,10,1)
			},
			{
				text: "Narodowe Święto Niepodległości",
				date: new Date(year,10,11)
			},
			{
				text: "Boże Narodzenie",
				date: new Date(year,11,25)
			},
			{
				text: "Boże Narodzenie",
				date: new Date(year,11,26)
			}];
			
			return holidays;
		}
	});
   
}
