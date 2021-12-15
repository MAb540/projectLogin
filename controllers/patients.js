import User from "../models/User.js";



let getDaysArray = function(year, month) {
    let monthIndex = month - 1; // 0..11 instead of 1..12
    let names = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
    let date = new Date(year, monthIndex, 1);
    let result = [];
    while (date.getMonth() == monthIndex) {
      result.push(date.getDate() + '-' + names[date.getDay()]);
      date.setDate(date.getDate() + 1);
    }
    return result;
  }
  function getFirstSundayOfMonth(monthDays){
    let first_sunday = monthDays.filter(day => day.includes('sun'));
    return first_sunday[0]
  }

export const getPatients = async (req, res) => {
    try {
      const users = await User.find({});
      return res.status(200).json(users);
    } catch (e) {
      console.error(e);
    }
  };


  export const getParams = async (req, res) => {



    try {
    
        const {email,date} = req.params;

        
        let year = parseInt(date.slice(5,9));
        let month = parseInt(date.slice(10,12));
        let day = parseInt(date.slice());
            
        let daysInMonth = getDaysArray(year,month);
        let first_Sunday = getFirstSundayOfMonth(daysInMonth);
        console.log(first_Sunday);
        if(parseInt(first_Sunday.slice(0,1)) === 1){
          res.send('sunday on first');
          
        }else{
          res.send('sunday on some other week');  
        }

       

    
    } catch (e) {
      console.error(e);
    }
  

};