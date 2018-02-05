/*
  * Ext.ux.DatePickerPlus  Addon
  * Ext.ux.form.DateFieldPlus  Addon  
  *
  * @author    Marco Wienkoop (wm003/lubber)
  * @copyright (c) 2008, Marco Wienkoop (marco.wienkoop@lubber.de) http://www.lubber.de
  *
  * translation by (walldorff )
*/
// Be sure to include this AFTER the datepickerwidget in your html-files

//Use this as a start to create you own language-file.
//Post it to the ext-forum, if you are done! :)
if(Ext.ux.DatePickerPlus){
    Ext.apply(Ext.ux.DatePickerPlus.prototype, {
        weekName : "Wk.",
        selectWeekText : "Klik om alle dagen van deze week te selecteren",
        selectMonthText : "Klik om alle weken van deze maand te selecteren",
        maxSelectionDaysTitle: 'Datumprikker',
        maxSelectionDaysText: 'De selectie kan maximum %0 dagen bevatten',
        undoText: "Herstel", // "Undo" in Dutch is really "Ongedaan maken" but that text is too long to fit the button 
        displayMaskText: 'Een ogenblik...',
        nextYearText: "Volgend jaar (Control+Up)",
        prevYearText: "Vorig jaar (Control+Down)",
        nationalHolidays: function(year) {
            year = (typeof year === "undefined" ? (this.lastRenderedYear ? this.lastRenderedYear : new Date().getFullYear()) : parseInt(year,10));
    //per default the DUTCH national holidays are calculated (according to http://nl.wikipedia.org/wiki/Feest-_en_gedenkdagen) 
    //remember to include the locale file _AFTER_ datepickerplus !
            var dayOfMay01 = new Date(year,4,1).getDay();
            var dayOfJun01 = new Date(year,5,1).getDay();			
            var dayOfSep01 = new Date(year,8,1).getDay();

            var holidays = 
            [{
                text: "Nieuwjaar",
                date: new Date(year,0,1)
            },
            {
                text: "Valentijnsdag",// every February 14
                date: new Date(year,1,14)
            },
            {
                text: "Koninginnedag", // every April 30
                date: new Date(year,3,30)
            },
            {
                text: "Dag van de arbeid",// every May 1
                date: new Date(year,4,1)
            },
            {
                text: "Nationale Dodenherdenking",// every May 4
                date: new Date(year,4,4)
            },
            {
                text: "Bevrijdingsdag",// every May 5
                date: new Date(year,4,5)
            },
            {
                text: "Moederdag",//(every second Sunday in May)
				date: new Date(year,4,(dayOfMay01>0?8+7-dayOfMay01:8))
            },
            {
                text: "Vaderdag",//(every third Sunday in June)
				date: new Date(year,5,(dayOfJun01>0?15+7-dayOfJun01:15))
			},
            {
                text: "Prinsjesdag",//(every third Tuesday in September)
				date: new Date(year,8,(dayOfSep01>2?17+7-dayOfSep01:17-dayOfSep01))
            },
            {
                text: "Sinterklaas", // every October 4
                date: new Date(year,9,4)
            },
            {
                text: "Dierendag", // every December 5
                date: new Date(year,11,5)
            },
            {
                text: "Eerste Kerstdag",
                date: new Date(year,11,25)
            },
            {
                text: "Tweede Kerstdag",
                date: new Date(year,11,26)
            },
            {
                text: "Oudejaar",
                date: new Date(year,11,31)
            }];
            
            return holidays;
        }
    });
   
}