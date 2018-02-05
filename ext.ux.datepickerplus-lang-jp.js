/*
  * Ext.ux.DatePickerPlus  Addon
  * Ext.ux.form.DateFieldPlus  Addon  
  *
  * @author    Marco Wienkoop (wm003/lubber)
  * @copyright (c) 2008, Marco Wienkoop (marco.wienkoop@lubber.de) http://www.lubber.de
  *
  * Japanese translation by Yoshihiro Kamimura (itheart)
  * @copyright (c) 2010, Yoshihiro Kamimura (your@itheart.com) http://www.itheart.com
  *
*/
// Be sure to include this AFTER the datepickerwidget and ext-lang-ja.js in your html-files
// If the law was changed, a review of this process.

/**
 * Calculate EquinoxDay
 * 
 * @param {Number} year
 * @param {Number} month
 * @return {Number} EquinoxDay
 */
function _calcEquinoxDay(year,month) {
	var EquinoxDay3 = [19.8277,20.8357,20.8431,21.8510];
	var EquinoxDay9 = [22.2588,23.2588,23.2488,24.2488];
	var result,p1,EquinoxDay;

	if ((year >= 1851) && (year <= 1899)) {p1 = 0;}
	else if ((year >= 1900) && (year <= 1979)) {p1 = 1;}
	else if ((year >= 1980) && (year <= 2099)) {p1 = 2;}
	else if ((year >= 2100) && (year <= 2150)) {p1 = 3;}
	else {return 0;}

	if (month == 3) {
		EquinoxDay = EquinoxDay3[p1];
	} else if (month == 9) {
		EquinoxDay = EquinoxDay9[p1];
	} else {
		return 0;
	}

	result = Math.floor(EquinoxDay + 0.242194 * (year - 1980) - Math.floor((year - 1980 + 0.01)/4));
	return result;
}


/**
 * Search Weekday
 *  On Sunday holiday, nearest weekday is substitute holiday
 * 
 * @param {Array} holidays holiday array
 * @param {Date} tdate targetDay
 * @return {Date} weekDay
 */
function _searchWeekDay(holidays, tdate) {

	var _isHoliday;

	while(true) {

		_isHoliday = false;
		Ext.each(holidays, function(holiday) {
			var _targetHoliday = holiday.date.clearTime().getTime(),
				_targetDate = tdate.clearTime().getTime();
			if (tdate.getDay() === 0 || _targetDate == _targetHoliday) {
				_isHoliday = true;
				return false;
			}
		});

		// found weekday
		if (_isHoliday == false) { break; }

		// re-try
		tdate = tdate.add(Date.DAY, 1);
	}

	return tdate;
}

/**
 * Calculate Japanese National Holiday
 * 
 * @param {Array} holidays
 * @param {Date} start Japanese National Holiday Start
 * @return {Array} Japanese National Holidays
 */
function _calcJpNationalHoliday(holidays, start) {
	var resultHolidays = [], resultHoliday;
	var converted = [];
	var i, il;
	var oneDayOfMsec = 86400000;
	var dayDiff;

	for (i=0,il=holidays.length;i<il;i++) {
		converted[i] = holidays[i].date.clearTime().getTime();
	}

	converted = converted.sort();

	for (i=0,il=converted.length - 1;i<il;i++) {
		dayDiff = (converted[i+1] - converted[i] - oneDayOfMsec) / oneDayOfMsec;
		if (dayDiff == 1) {
			resultHoliday = new Date(converted[i]).add(Date.DAY, 1);
			if (resultHoliday > start && resultHoliday.getDay() !== 0) {
				resultHolidays.push(resultHoliday);
			}
		}
	}

	return resultHolidays;
}

if(Ext.ux.DatePickerPlus){
	Ext.apply(Ext.ux.DatePickerPlus.prototype, {
		weekName : '週',
		selectWeekText : '今週を選択',
		selectMonthText : '今月を選択',
		maxSelectionDaysTitle: '日付選択',
		maxSelectionDaysText: '%0 日まで選択可能です。',
		undoText: '元に戻す',
		displayMaskText: 'しばらくお待ちください...',
		nextYearText: '翌年 (コントロール+上)',
		prevYearText: '前年 (コントロール+下)',
		nationalHolidays: function(year) {
			var holidays = [];
			var jpNationalHoliday;
			var dayOfJan01 = new Date(year,0,1).getDay();
			var dayOfJul01 = new Date(year,6,1).getDay();
			var dayOfSep01 = new Date(year,8,1).getDay();
			var dayOfOct01 = new Date(year,9,1).getDay();
			var startOfSubHoliday = new Date(1973, 3, 12);
			var startOfJpNationalHoliday = new Date(1985, 11, 27);

			year = (typeof year === 'undefined' ? (this.lastRenderedYear ? this.lastRenderedYear : new Date().getFullYear()) : parseInt(year,10));

			// 元日(New Year's Day)
			if (year >= 1948) {
				holidays.push({
					text: '元旦',
					date: new Date(year,0,1)
				});
			}

			// 成人の日(Coming of Age Day)
			if (year >= 1948) {
				holidays.push({
					text: '成人の日',
					date: year <= 1999 ? new Date(year,0,15) : new Date(year,0,(dayOfJan01>1?9+7-dayOfJan01:9-dayOfJan01)) 
				});
			}

			// 建国記念の日(National Foundation Day)
			if (year >= 1966) {
				holidays.push({
					text: '建国記念の日',
					date: new Date(year,1,11)
				});
			}

			// 春分の日(Vernal Equinox Day)
			if (year >= 1948) {
				holidays.push({
					text: '春分の日',
					date: new Date(year,2,_calcEquinoxDay(year,3))
				});
			}

			// 昭和の日(Showa Day)
			if (year >= 1948) {
				holidays.push({
					text: year <= 1988 ? '天皇誕生日' : (year <= 2006 ? 'みどりの日' : '昭和の日'),
					date: new Date(year,3,29)
				});
			}

			// 憲法記念日(Constitution Memorial Day)
			if (year >= 1948) {
				holidays.push({
					text: '憲法記念日',
					date: new Date(year,4,3)
				});
			}

			// みどりの日(Greenery Day)
			if (year >= 2007) {
				holidays.push({
					text: 'みどりの日',
					date: new Date(year,4,4)
				});
			}

			// こどもの日(Children's Day)
			if (year >= 1948) {
				holidays.push({
					text: 'こどもの日',
					date: new Date(year,4,5)
				});
			}

			// 海の日(Marine Day)
			if (year >= 1995) {
				holidays.push({
					text: '海の日',
					date: year <= 2002 ? new Date(year,6,20) : new Date(year,6,(dayOfJul01>1?16+7-dayOfJul01:16-dayOfJul01)) 
				});
			}

			// 敬老の日(Respect for the Aged Day)
			if (year >= 1966) {
				holidays.push({
					text: '敬老の日',
					date: year <= 2002 ? new Date(year,8,15) : new Date(year,8,(dayOfSep01>1?16+7-dayOfSep01:16-dayOfSep01)) 
				});
			}

			// 秋分の日(Autumnal Equinox Day)
			if (year >= 1948) {
				holidays.push({
					text: '秋分の日',
					date: new Date(year,8,_calcEquinoxDay(year,9))
				});
			}

			// 体育の日(ealth and Sports Day)
			if (year >= 1966) {
				holidays.push({
					text: '体育の日',
					date: year <= 1999 ? new Date(year,9,10) : new Date(year,9,(dayOfOct01>1?9+7-dayOfOct01:9-dayOfOct01)) 
				});
			}

			// 文化の日(National Culture Day)
			if (year >= 1948) {
				holidays.push({
					text: '文化の日',
					date: new Date(year,10,3)
				});
			}

			// 勤労感謝の日(Labor Thanksgiving Day)
			if (year >= 1948) {
				holidays.push({
					text: '勤労感謝の日',
					date: new Date(year,10,23)
				});
			}

			// 天皇誕生日(The Emperor's Birthday)
			if (year >= 1989) {
				holidays.push({
					text: '天皇誕生日',
					date: new Date(year,11,23)
				});
			}

			// 皇太子明仁親王の結婚の儀
			if (year == 1959) {
				holidays.push({
					text: '皇太子明仁親王の結婚の儀',
					date: new Date(year,3,10)
				});
			}

			// 昭和天皇の大喪の礼
			if (year == 1989) {
				holidays.push({
					text: '昭和天皇の大喪の礼',
					date: new Date(year,1,24)
				});
			}

			// 即位礼正殿の儀
			if (year == 1990) {
				holidays.push({
					text: '即位礼正殿の儀',
					date: new Date(year,10,12)
				});
			}

			// 皇太子徳仁親王の結婚の儀
			if (year == 1993) {
				holidays.push({
					text: '皇太子徳仁親王の結婚の儀',
					date: new Date(year,5,9)
				});
			}

			// 振替休日(substitute holiday)
			if (year >= 1973) {
				Ext.each(holidays, function(holiday) {
					if (holiday.date >= startOfSubHoliday) {
						if (holiday.date.getDay() == 0) {
							if (year >= 2005) {
								// 最も近い国民の祝日でない日
								holidays.push({
									text: '振替休日',
									date: _searchWeekDay(holidays, holiday.date)
								});
							} else {
								// 翌日を休日
								holidays.push({
									text: '振替休日',
									date: holiday.date.add(Date.DAY, 1)
								});
							}
						}
					}
				});
			}

			// 国民の休日(Japanese National Holiday)
			if (year >= 1985) {
				jpNationalHoliday = _calcJpNationalHoliday(holidays, startOfJpNationalHoliday);
				Ext.each(jpNationalHoliday, function(jpholiday) {
					holidays.push({
						text: '国民の休日',
						date: new Date(jpholiday)
					});
				});
			}

			return holidays;
		}
	});
}
