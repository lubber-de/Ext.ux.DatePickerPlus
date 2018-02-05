/*
  * Ext.ux.DatePickerPlus  Addon
  * Ext.ux.form.DateFieldPlus  Addon  
  *
  * @author    Marco Wienkoop (wm003/lubber)
  * @copyright (c) 2008, Marco Wienkoop (marco.wienkoop@lubber.de) http://www.lubber.de
  *
  * translation by WhiteRussian 
*/
// Be sure to include this AFTER the datepickerwidget in your html-files

if(Ext.ux.DatePickerPlus){
	Ext.apply(Ext.ux.DatePickerPlus.prototype, {
		weekName : "Нд",
        startDay: 1,
		selectWeekText : "Нажмите чтобы выделить все дни в этой неделе",
		selectMonthText : "Нажмите чтобы выделить все недели в этом месяце",
		maxSelectionDaysTitle: 'Календарь',
		maxSelectionDaysText: 'Вы можете выбрать только %0 дней',
		undoText: "Отменить",
		displayMaskText: 'Пожалуйста подождите...',
		nextYearText: "Следующий год (Control+Вверх)",
		prevYearText: "Предыдущий год (Control+Вниз)",
		nationalHolidays: function(year) {
			year = (typeof year === "undefined" ? (this.lastRenderedYear ? this.lastRenderedYear : new Date().getFullYear()) : parseInt(year,10));
	
			var holidays = 
			[{
				text: "Новый год",
				date: new Date(year,0,1)
			},
                        {
				text: "Новогодние каникулы",
				date: new Date(year,0,2)
			},
                        {
				text: "Новогодние каникулы",
				date: new Date(year,0,3)
			},
                        {
				text: "Новогодние каникулы",
				date: new Date(year,0,4)
			},
                        {
				text: "Новогодние каникулы",
				date: new Date(year,0,5)
			},
                        {
				text: "Рождество Христово",
				date: new Date(year,0,7)
			},
                        {
				text: "День защитника Отечества",
				date: new Date(year,1,23)
			},
                        {
				text: "Международный женский день",
				date: new Date(year,2,8)
			},                        
                        {
				text: "Праздник весны и труда",
				date: new Date(year,3,1)
			},                        
                        {
				text: "День Победы",
				date: new Date(year,3,9)
			},                        
                        {
				text: "День России",
				date: new Date(year,5,12)
			},                        
                        {
				text: "День народного единства",
				date: new Date(year,10,4)
			}];
			
			return holidays;
		}
	});   
}
