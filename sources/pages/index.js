// © 2024 Lufthansa Cargo CL
window.onload = function() {
    fetch('./sources/content/announce/announce.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.announce .title').textContent = data.title;
            document.querySelector('.announce .subtitle').textContent = data.subtitle;
        });
    fetch('./sources/content/carousels/carousel_1.json')
        .then(response => response.json())
        .then(data => {
             
            document.querySelector('.carousel1t').textContent = data.title;
            document.querySelector('.carousel1st').textContent = data.subtitle;
            document.querySelector('.carousel1i').src = './sources/images/' + data.image; 
        });
    fetch('./sources/content/carousels/carousel_2.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.carousel2t').textContent = data.title;
            document.querySelector('.carousel2st').textContent = data.subtitle;
            document.querySelector('.carousel2i').src = './sources/images/' + data.image;  
        });
    fetch('./sources/content/carousels/carousel_3.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.carousel3t').textContent = data.title;
            document.querySelector('.carousel3st').textContent = data.subtitle;
            document.querySelector('.carousel3i').src = './sources/images/' + data.image; 
        });
    fetch('./sources/content/carousels/carousel_4.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.carousel4t').textContent = data.title;
            document.querySelector('.carousel4st').textContent = data.subtitle;
            document.querySelector('.carousel4i').src = './sources/images/' + data.image;
        });


    function addRowToTable(data) {
        let table = document.querySelector('.table');
        let newRow = table.insertRow();
        data.forEach(function(cellData, index) {
            let newCell = newRow.insertCell(index);
            newCell.textContent = cellData;
        });
    }
    function getNextWeekDate(weekdayAbbreviation) {  
        const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];  
        const today = new Date();  
        const todayDayIndex = weekdays.indexOf(today.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase());  
        
        if (todayDayIndex === -1 || !weekdays.includes(weekdayAbbreviation.toUpperCase())) {  
            throw new Error("Invalid weekday abbreviation.");  
        }  
        
        let targetDayIndex = weekdays.indexOf(weekdayAbbreviation.toUpperCase());  
        let daysUntilTarget = (targetDayIndex - todayDayIndex + 7) % 7; // Ensure positive result  
        
        if (daysUntilTarget === 0 && today.getHours() > 0) {  
            // If today is the target day but it's already passed (based on time), find the next one  
            daysUntilTarget = 7;  
        }  
        
        const targetDate = new Date(today);  
        targetDate.setDate(today.getDate() + daysUntilTarget);  
        
        //const year = targetDate.getFullYear();  
        const month = String(targetDate.getMonth() + 1).padStart(2, '0'); // Months are zero based  
        const day = String(targetDate.getDate()).padStart(2, '0');  
        
        return `${month}${day}`;  
    }  
    function createDataArray(week_str, flight_str, data_obj) { 
        let tempSTR;  
        switch (flight_str) {  
            case 'FLT1': tempSTR = 'A'; break;  
            case 'FLT2': tempSTR = 'B'; break;  
            case 'FLT3': tempSTR = 'C'; break;  
            case 'FLT4': tempSTR = 'D'; break;  
            case 'FLT5': tempSTR = 'E'; break;  
            case 'FLT6': tempSTR = 'F'; break;  
            default: throw new Error('Invalid week_int value');  
        }   
        return tempArr = [
            week_str,
            'Lufthansa Cargo',
            'LH'+getNextWeekDate(week_str)+tempSTR,
            data_obj[week_str][flight_str].STR,
            data_obj[week_str][flight_str].TER,
            data_obj[week_str][flight_str].DUR, 
            'Boeing 777-200F',
            data_obj[week_str][flight_str].COM, 
        ]; 
    }
    function isObjectEmpty(obj) {  
        for (let key in obj) {  
            if (obj.hasOwnProperty(key)) {  
                if (typeof obj[key] === 'object' && obj[key] !== null) {  
                    if (!isObjectEmpty(obj[key])) {  
                        return false;  
                    }  
                } else if (obj[key] !== '' && obj[key] !== null && obj[key] !== undefined) {   
                    return false;  
                }  
            }  
        }  
        return true;
    }  
    function isKeyPathEmpty(jsonObj, keyPath) {  
        const keys = keyPath.split('.');  
        let currentLevel = jsonObj;  
        for (let i = 0; i < keys.length; i++) {  
            if (currentLevel[keys[i]] === undefined || currentLevel[keys[i]] === null) {  
                return true;
            }  
            currentLevel = currentLevel[keys[i]];  
        }  
        return isObjectEmpty(currentLevel);
    }  

    fetch('./sources/content/weekly-schedule.json')  
        .then(response => response.json())  
        .then(data => {  
            const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
            const flightNumbers = ['FLT1', 'FLT2', 'FLT3', 'FLT4', 'FLT5', 'FLT6'];
            days.forEach(day => {  
                flightNumbers.forEach(flightNumber => {  
                    const keyPath = `${day}.${flightNumber}`;  
                    if (!isKeyPathEmpty(data, keyPath)) {  
                        addRowToTable(createDataArray(day, flightNumber, data));  
                    }  
                });  
            });  
        })  
        .catch(error => {  
            console.error('Error fetching or parsing JSON:', error);  
        });  
};
