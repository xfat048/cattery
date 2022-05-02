{/* <script> */}
    const scriptURL = "https://script.google.com/macros/s/AKfycbwZNayCUpesVVvOmi2POGoS60LIyQus2URxAQvqSFyB1dkHgmyU9aIUOyQoV5asxbEgpg/exec";
    const form = document.forms["lfcattery-contact-form"];
    const btnKirim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const myAlert = document.querySelector('.my-alert');

    function validateForm() {
        var x = document.forms["lfcattery-contact-form"]["nama"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      } 
    function validateForm() {
        var x = document.forms["lfcattery-contact-form"]["email"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      }
    function validateForm() {
        var x = document.forms["lfcattery-contact-form"]["pesan"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      }    

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // ketika tombol submit di klik
      // tampilkan tombol loading, hilangkan tombol kirim
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          // tampilkan tombol kirim, hilangkan tombol loading
          btnLoading.classList.toggle('d-none');
          btnKirim.classList.toggle('d-none');
          // tampilkan alert
          myAlert.classList.toggle('d-none');
          // reset form
          form.reset();
          console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
    });
//   </script>