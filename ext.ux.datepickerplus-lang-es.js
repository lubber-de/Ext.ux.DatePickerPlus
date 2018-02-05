/*
  * Ext.ux.DatePickerPlus  Addon
  * Ext.ux.form.DateFieldPlus  Addon  
  *
  * @author    Marco Wienkoop (wm003/lubber)
  * @copyright (c) 2008, Marco Wienkoop (marco.wienkoop@lubber.de) http://www.lubber.de
  *
  * translation by Ruth González (erzsebet)
  * @copyright (c) 2009, Ruth González (erzsebet@gmail.com) 
  *
*/
// Be sure to include this AFTER the datepickerwidget in your html-files

//Use this as a start to create you own language-file.
//Post it to the ext-forum, if you are done! :)
if(Ext.ux.DatePickerPlus){
	Ext.apply(Ext.ux.DatePickerPlus.prototype, {
		startDay:1,
		weekName : "Sem.",
		selectWeekText : "Click para seleccionar todos los dias de la semana",
		selectMonthText : "Click para seleccionar todas las semanas de este mes",
		maxSelectionDaysTitle: 'Seleccione fecha',
		maxSelectionDaysText: 'Solo puede seleccionar un maximo de %0 dias',
		undoText: "Cancelar",
		displayMaskText: 'Espere...',
		nextYearText: "Año Proximo (Control+Cursor Arriba)",
		prevYearText: "Año Anterior (Control+Cursor Abajo)",
		nationalHolidays: function(year) {
			year = (typeof year === "undefined" ? (this.lastRenderedYear ? this.lastRenderedYear : new Date().getFullYear()) : parseInt(year,10));
	//per default the US national holidays are calculated (according to http://en.wikipedia.org/wiki/Public_holidays_of_the_United_States) 
	//override this function in your local file to calculate holidays for your own country
	//but remember to include the locale file _AFTER_ datepickerplus !
			 
	
			var holidays = 
			[{
				text: "Año nuevo",
				date: new Date(year,0,1)
			},
			{
				text: "Viernes Santo",
				date: Ext.util.EasterDate(year,-2)
			},
			{
				text: "Fiesta del Trabajo",
				date: new Date(year,4,1)
			},
			{
				text: "Asunción de la Virgen",
				date: new Date(year,7,15)
			},
			{
				text: "Fiesta Nacional de España",
				date: new Date(year,9,12)
			},
			{
				text: "Todos los Santos",
				date: new Date(year,10,1)
			},
			{
				text: "Constitución Española",
				date: new Date(year,11,6)
			},
			{
				text: "Inmaculada Concepción",
				date: new Date(year,11,8)
			},
			 
			{
				text: "Navidad",
				date: new Date(year,11,25)
			}
			
			];
			
			return holidays;
		}
	});
   
}
