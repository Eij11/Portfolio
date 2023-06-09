// ====================================================
// Alkali Metals
// ====================================================

function Select_Alkali_Metals(){
    // Declare ng variable
    // Use the query method to select all classes with that name
    const alkali_metals = document.querySelectorAll('.alkali_metals');

    //Kinuha lahat ng td, declare ng variable 
    const tableCells = document.querySelectorAll('td');


    // If the checkbox is checked, update the style of each non-metal element
    // If it's unchecked, revert to the original style
    if (document.getElementById('checkbox-alkali-metals').checked) {
        alkali_metals.forEach((element) => {
            element.style.background = 'linear-gradient(to bottom, #d500ff, #722ff9)';
            element.style.color = 'white'; 
            element.style.boxShadow = '3px 3px 3px #D774FF';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = 'white';
              });
        });

        // Kung meron daw yung mga class names na yan, di mag lolower opacity kaya nag remain na 1, kung wala, lower opactiy
        tableCells.forEach((cell) => {
            if (cell.classList.contains('alkali_metals') || cell.classList.contains('col-number-identifiers') | cell.classList.contains('number-identifiers'))  {
                cell.style.opacity = '1';
            }
            else {
                cell.style.opacity = '0.5';
            }
          });
    } 
    
    // Dito irereset niya lang sa acutal design niya, kung di nacheck yung checkbox
    else {
        alkali_metals.forEach((element) => {
            element.style.background = '';
            element.style.color = '';
            element.style.boxShadow = '';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = '';
              });
        });

        tableCells.forEach((cell) => {
            cell.style.opacity = '';
            });
  }
}



// ====================================================
// Actinide
// ====================================================

function Select_Actinides(){
    const alkali_metals = document.querySelectorAll('.actinides');
    const tableCells = document.querySelectorAll('td');


    if (document.getElementById('checkbox-actinides').checked) {
        alkali_metals.forEach((element) => {
            element.style.background = 'linear-gradient(rgba(212,251,0,1) 35%, rgba(80,195,33,1) 100%)';
            element.style.color = 'white'; 
            element.style.boxShadow = '3px 3px 3px #D3FF6F';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = 'white';
              });
        });

        tableCells.forEach((cell) => {
            if (cell.classList.contains('actinides') || cell.classList.contains('col-number-identifiers') | cell.classList.contains('number-identifiers'))  {
                cell.style.opacity = '1';
            }
            else {
                cell.style.opacity = '0.5';
            }
          });
    } 
    
    else {
        alkali_metals.forEach((element) => {
            element.style.background = '';
            element.style.color = '';
            element.style.boxShadow = '';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = '';
              });
        });

        tableCells.forEach((cell) => {
            cell.style.opacity = '';
            });
  }
}





// ====================================================
// Transition Metals
// ====================================================
function Select_Transition_Metals(){
    const alkali_metals = document.querySelectorAll('.transition_metals');
    const tableCells = document.querySelectorAll('td');


    if (document.getElementById('checkbox-transition-metals').checked) {
        alkali_metals.forEach((element) => {
            element.style.background = 'linear-gradient(0deg, rgba(230,37,246,1) 35%, rgba(255,10,171,1) 100%)';
            element.style.color = 'white'; 
            element.style.boxShadow = '3px 3px 3px #FF84D0';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = 'white';
              });
        });

        tableCells.forEach((cell) => {
            if (cell.classList.contains('transition_metals') || cell.classList.contains('col-number-identifiers') | cell.classList.contains('number-identifiers'))  {
                cell.style.opacity = '1';
            }
            else {
                cell.style.opacity = '0.5';
            }
          });
    } 
    
    else {
        alkali_metals.forEach((element) => {
            element.style.background = '';
            element.style.color = '';
            element.style.boxShadow = '';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = '';
              });
        });

        tableCells.forEach((cell) => {
            cell.style.opacity = '';
            });
  }
}


// ====================================================
// Alkaline Earth Metals
// ====================================================
function Select_Alkaline_Earth_Metals(){
    const alkali_metals = document.querySelectorAll('.alkaline_earth');
    const tableCells = document.querySelectorAll('td');


    if (document.getElementById('checkbox-alkaline-earth-metals').checked) {
        alkali_metals.forEach((element) => {
            element.style.background = 'linear-gradient(#7b22f8, #2339da)';
            element.style.color = 'white'; 
            element.style.boxShadow = '3px 3px 3px #E5A6FF';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = 'white';
              });
        });

        tableCells.forEach((cell) => {
            if (cell.classList.contains('alkaline_earth') || cell.classList.contains('col-number-identifiers') | cell.classList.contains('number-identifiers'))  {
                cell.style.opacity = '1';
            }
            else {
                cell.style.opacity = '0.5';
            }
          });
    } 
    
    else {
        alkali_metals.forEach((element) => {
            element.style.background = '';
            element.style.color = '';
            element.style.boxShadow = '';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = '';
              });
        });

        tableCells.forEach((cell) => {
            cell.style.opacity = '';
            });
  }
}


// ====================================================
// Lanthanide
// ====================================================
function Select_Lanthanide(){
    const alkali_metals = document.querySelectorAll('.lanthanides');
    const tableCells = document.querySelectorAll('td');


    if (document.getElementById('checkbox-lanthanide').checked) {
        alkali_metals.forEach((element) => {
            element.style.background = 'linear-gradient(0deg, rgba(0,251,33,1) 35%, rgba(61,231,143,1) 100%)';
            element.style.color = 'white'; 
            element.style.boxShadow = '3px 3px 3px #77FF94';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = 'white';
              });
        });

        tableCells.forEach((cell) => {
            if (cell.classList.contains('lanthanides') || cell.classList.contains('col-number-identifiers') | cell.classList.contains('number-identifiers'))  {
                cell.style.opacity = '1';
            }
            else {
                cell.style.opacity = '0.5';
            }
          });
    } 
    
    else {
        alkali_metals.forEach((element) => {
            element.style.background = '';
            element.style.color = '';
            element.style.boxShadow = '';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = '';
              });
        });

        tableCells.forEach((cell) => {
            cell.style.opacity = '';
            });
  }
}


// ====================================================
// Post Transition Metals
// ====================================================
function Select_Post_Transition_Metals(){
    const alkali_metals = document.querySelectorAll('.post_trans_metals');
    const tableCells = document.querySelectorAll('td');


    if (document.getElementById('checkbox-post-transition-metals').checked) {
        alkali_metals.forEach((element) => {
            element.style.background = 'linear-gradient(0deg, rgba(37,246,177,1) 35%, rgba(70,245,255,1) 100%)';
            element.style.color = 'white'; 
            element.style.boxShadow = '3px 3px 3px #80FFE8';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = 'white';
              });
        });

        tableCells.forEach((cell) => {
            if (cell.classList.contains('post_trans_metals') || cell.classList.contains('col-number-identifiers') | cell.classList.contains('number-identifiers'))  {
                cell.style.opacity = '1';
            }
            else {
                cell.style.opacity = '0.5';
            }
          });
    } 
    
    else {
        alkali_metals.forEach((element) => {
            element.style.background = '';
            element.style.color = '';
            element.style.boxShadow = '';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = '';
              });
        });

        tableCells.forEach((cell) => {
            cell.style.opacity = '';
            });
  }
}


// ====================================================
// Noble Gases
// ====================================================
function Select_Noble_Gases(){
    const alkali_metals = document.querySelectorAll('.noble_gas');
    const tableCells = document.querySelectorAll('td');


    if (document.getElementById('checkbox-noble-gases').checked) {
        alkali_metals.forEach((element) => {
            element.style.background = 'linear-gradient(#f68367, #ff0c00)';
            element.style.color = 'white'; 
            element.style.boxShadow = '3px 3px 3px #FF7E73';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = 'white';
              });
        });

        tableCells.forEach((cell) => {
            if (cell.classList.contains('noble_gas') || cell.classList.contains('col-number-identifiers') | cell.classList.contains('number-identifiers'))  {
                cell.style.opacity = '1';
            }
            else {
                cell.style.opacity = '0.5';
            }
          });
    } 
    
    else {
        alkali_metals.forEach((element) => {
            element.style.background = '';
            element.style.color = '';
            element.style.boxShadow = '';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = '';
              });
        });

        tableCells.forEach((cell) => {
            cell.style.opacity = '';
            });
  }
}

// ====================================================
// Reactive Nonmetals
// ====================================================
function Select_Reactive_Nonmetals(){
    const alkali_metals = document.querySelectorAll('.nonmetals');
    const tableCells = document.querySelectorAll('td');


    if (document.getElementById('checkbox-reactive-nonmetals').checked) {
        alkali_metals.forEach((element) => {
            element.style.background = 'linear-gradient(#fffc00, #f9972f)';
            element.style.color = 'white'; 
            element.style.boxShadow = '3px 3px 3px #FF887E';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = 'white';
              });
        });

        tableCells.forEach((cell) => {
            if (cell.classList.contains('nonmetals') || cell.classList.contains('col-number-identifiers') | cell.classList.contains('number-identifiers'))  {
                cell.style.opacity = '1';
            }
            else {
                cell.style.opacity = '0.5';
            }
          });
    } 
    
    else {
        alkali_metals.forEach((element) => {
            element.style.background = '';
            element.style.color = '';
            element.style.boxShadow = '';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = '';
              });
        });

        tableCells.forEach((cell) => {
            cell.style.opacity = '';
            });
  }
}

// ====================================================
// Metalloids
// ====================================================
function Select_Metalloids(){
    const alkali_metals = document.querySelectorAll('.metalloids');
    const tableCells = document.querySelectorAll('td');


    if (document.getElementById('checkbox-metalloids').checked) {
        alkali_metals.forEach((element) => {
            element.style.background = 'linear-gradient(0deg, rgba(82,37,246,1) 35%, rgba(70,166,255,1) 100%)';
            element.style.color = 'white'; 
            element.style.boxShadow = '3px 3px 3px #8679FF';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = 'white';
              });
        });

        tableCells.forEach((cell) => {
            if (cell.classList.contains('metalloids') || cell.classList.contains('col-number-identifiers') | cell.classList.contains('number-identifiers'))  {
                cell.style.opacity = '1';
            }
            else {
                cell.style.opacity = '0.5';
            }
          });
    } 
    
    else {
        alkali_metals.forEach((element) => {
            element.style.background = '';
            element.style.color = '';
            element.style.boxShadow = '';
            element.querySelectorAll('a').forEach(link => {
                link.style.color = '';
              });
        });

        tableCells.forEach((cell) => {
            cell.style.opacity = '';
            });
  }
}




