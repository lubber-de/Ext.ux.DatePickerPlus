/*
  * Ext.ux.DatePickerPlus  Addon
  * Ext.ux.form.DateFieldPlus  Addon  
  *
  * @author    Marco Wienkoop (wm003/lubber)
  * @copyright (c) 2008, Marco Wienkoop (marco.wienkoop@lubber.de) http://www.lubber.de
 *
 *  translation by dubdub 
*/
// Be sure to include this AFTER the datepickerwidget in your html-files

//Use this as a start to create you own language-file.
//Post it to the ext-forum, if you are done! :)
if(Ext.ux.DatePickerPlus){
	Ext.apply(Ext.ux.DatePickerPlus.prototype, {
		weekName : " Se.",
		selectWeekText : "Cliquez ici pour sélectionner tous les jours de la semaine",
		selectMonthText : "Cliquez ici pour sélectionner tous les jours du mois",
		maxSelectionDaysTitle: 'Sélection de la date',
		maxSelectionDaysText: 'Vous ne pouvez sélectionner que %0 jour(s) au maximum',
		undoText: "Annuler",
		displayMaskText: 'Veuillez patienter...',
		nextYearText: "Année suivante (Control+Haut)",
		prevYearText: "Année Précedente (Control+Bas)",
		nationalHolidays: function(year) {
			year = (typeof year === "undefined" ? (this.lastRenderedYear ? this.lastRenderedYear : new Date().getFullYear()) : parseInt(year,10));
			// FR national holidays are calculated according to http://fr.wikipedia.org/wiki/Jour_f%C3%A9ri%C3%A9#France)
			
			var holidays = 
			[{
				text: "Jour de l'An",
				date: new Date(year,0,1)
			},
			{
				text: "Fête du travail",
				date: new Date(year,4,1)
			},
			{
				text: "Fin de la Seconde Guerre mondiale en Europe (1945)",
				date: new Date(year,4,8)
			},
			{
				text: "Fête nationale",
				date: new Date(year,6,14)
			},
			{
				text: "Assomption",
				date: new Date(year,7,15)
			},
			{
				text: "Toussaint",
				date: new Date(year,10,1)
			},
			{
				text: "Armistice de 1918",
				date: new Date(year,10,11)
			},
			{
				text: "Noël",
				date: new Date(year,11,25)
			},
			{
				text: "Lundi de Pâques",
				date: Ext.util.EasterDate(year, 1)
			},
			{
				text: "Ascension",
				date: Ext.util.EasterDate(year, 39)
			},
			{
				text: "Lundi de Pentecôte",
				date: Ext.util.EasterDate(year, 50)
			}];
			
			return holidays;
		}
	});
   
}
