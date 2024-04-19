function formatDuration (seconds) {
    var time_array = [];
    var years = "";
    var minutes = "";
    var hours = "";
    var days = "";

    if (seconds >= 31536000) {
        years = Math.floor(seconds / 31536000);
        time_array.push(years.toString().concat("", years > 1 ? ` years` : ` year`));

        days = Math.floor(seconds % 31536000 / 86400);
        time_array.push(days.toString().concat("", days > 1 ? ` days` : ` day`));

        hours = Math.floor(seconds % 31536000 % 86400 / 3600);
        time_array.push(hours.toString().concat("", hours > 1 ? ` hours` : ` hour`));

        minutes = Math.floor(seconds % 31536000 % 86400 % 3600 / 60);
        time_array.push(minutes.toString().concat("", minutes > 1 ? ` minutes` : ` minute`));

        seconds = Math.floor(seconds % 31536000 % 86400 % 3600 % 60);
        time_array.push(seconds.toString().concat("", seconds > 1 ? ` seconds` : ` second`));



    }


    

   else if (seconds >= 86400 ) {

        days = Math.floor(seconds / 86400);
        time_array.push(days.toString().concat("", days > 1 ? ` days` : ` day`));
        

        hours = Math.floor(seconds % 86400 / 3600);
        time_array.push(hours.toString().concat("", hours > 1 ? ` hours` : ` hour`));
      

        minutes = Math.floor(seconds % 86400 % 3600 / 60);
        time_array.push(minutes.toString().concat("", minutes > 1 ? ` minutes` : ` minute`));
        

        seconds = Math.floor(seconds % 86400 % 3600 % 60);
        time_array.push(seconds.toString().concat("", seconds > 1 ? ` seconds` : ` second`));






    
    }
    
    
    
    else if (seconds >= 3600){

        hours = Math.floor(seconds / 3600);
        time_array.push(hours.toString().concat("", hours > 1 ? ` hours` : ` hour`));
        
        minutes = Math.floor((seconds % 3600) / 60);
        time_array.push(minutes.toString().concat("", minutes > 1 ? ` minutes` : ` minute`));

        seconds = Math.floor((seconds % 3600) % 60);
        time_array.push(seconds.toString().concat("", seconds > 1 ? ` seconds` : ` second`));

        

    }
    else if (seconds >= 60) {
        minutes = Math.floor(seconds / 60);
        time_array.push(minutes.toString().concat("", minutes > 1 ? ` minutes` : ` minute`));
        seconds = Math.floor((seconds % 60));
        time_array.push(seconds.toString().concat("", seconds > 1 ? ` seconds` : ` second`));

    }
    else {
        if (seconds == 0) {
            return 'now';
        }
        else {
        return seconds > 1 ? `${seconds} seconds` : `${seconds} second`;
        }  
    }

    filtered_time_array = time_array.filter(item => !item.startsWith('0'));
    
    
    return filtered_time_array.reduce((time_string, time_value, index) => {
        var last_index = filtered_time_array.length - 1;
        var second_to_last_index = filtered_time_array.length - 2;

        

        if (index == last_index) {
            return time_string += `${time_value}`;
        }
        else if (index == second_to_last_index ) {
            return time_string += `${time_value} and `;
        }
        else {
            return time_string += `${time_value}, `;
        }
      
    }, "")

    


    
    
  }

console.log(formatDuration(132030240));

