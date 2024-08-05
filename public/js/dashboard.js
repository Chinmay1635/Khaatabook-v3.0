let profileBtn = document.querySelector("#profile");
let profileDisplay = document.querySelector("#profile-display");
let profileStatus = false;


const initialTotal ={
    Food:0,
    Healthcare: 0,
    Grocery: 0,
    Entertainment: 0,
    Travel: 0,
    Other: 0,

} ;

//Getting data from server category
const totalsByCategory = categories.reduce((acc, { _id, total }) => {
    acc[_id] = total;
    return acc;
}, initialTotal);

//Storig it by destructuring
const { Food, Healthcare, Grocery, Entertainment, Travel, Other } = totalsByCategory;





profileBtn.addEventListener("click", () => {
    if (!profileStatus) {
        profileStatus = true;
        gsap.fromTo("#profile-display", 
            { x: 100, scale: 1, opacity: 0 }, 
            { x: 0, scale: 1, opacity: 1, duration: 0.2, display: "block" }
        );
    } else {
        profileStatus = false;
        gsap.to("#profile-display", {
            x: 100,
            scale: 1,
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                profileDisplay.style.display = "none";
            }
        });
    }
});

Shery.textAnimate(".logo-title" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  const ctx = document.getElementById('myPieChart').getContext('2d');
        const myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Food', 'Grocery', 'Entertainment', 'Healthcare', 'Travel', 'Other'],
                datasets: [{
                    label: 'Expense Distribution',
                    data: [Food, Grocery, Entertainment, Healthcare, Travel, Other],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(0, 48, 73, 0.2)',
                        'rgba(192, 94, 242, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(0, 48, 73, 1)',
                        'rgba(192, 94, 242, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.label + ': ' +'₹ '+ tooltipItem.raw ;
                            }
                        }
                    }
                }
            }
        });