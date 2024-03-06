let number = "0670000000";

number = number.replace(/(\d{3})(\d{2})(\d{2})(\d{3})/, "+" + 38 + " ($1)-$2-$3-$4"),
   console.log(number);
