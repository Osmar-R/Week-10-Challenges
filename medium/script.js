let num = [4, 5, 6, 7, 0, 1, 2];

const target = 0;

const target2 = 3;

num.forEach(function (nums, index) {
  console.log(num, index);

  if (target == nums) {
    console.log(num.indexOf(nums));
  }

  if (target2 != nums) {
    console.log(-1);
  }
});

document.getElementById("DIV").classList.add("class goes here");
