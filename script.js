{/* <script> */}
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwR-kzgPeSNkT34cFVe4n2j-eBpucw_aFlSarS9E0h27KU-2ctjS79gwkOMi9Eg5ft-/exec';
    const form = document.forms["cattery-form-barang"];
    const btnKirim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const myAlert = document.querySelector('.my-alert');

    function validateForm() {
        var x = document.forms["cattery-form-barang"]["nama"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      } 
    function validateForm() {
        var x = document.forms["cattery-form-barang"]["jenisbarang"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      }
    function validateForm() {
        var x = document.forms["cattery-form-barang"]["merk"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      }
    function validateForm() {
        var x = document.forms["cattery-form-barang"]["harga"].value;
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

    /* Dengan Rupiah */
    var dengan_rupiah = document.getElementById('harga');
    dengan_rupiah.addEventListener('keyup', function(e)
    {
        dengan_rupiah.value = formatRupiah(this.value, 'Rp. ');
    });
    
    /* Fungsi */
    function formatRupiah(angka, prefix)
    {
        var number_string = angka.replace(/[^,\d]/g, '').toString(),
            split    = number_string.split(','),
            sisa     = split[0].length % 3,
            rupiah     = split[0].substr(0, sisa),
            ribuan     = split[0].substr(sisa).match(/\d{3}/gi);
            
        if (ribuan) {
            separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }
        
        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
    }

     /* Tanpa Rupiah */
     /* var tanpa_rupiah = document.getElementById('tanpa-rupiah');
     tanpa_rupiah.addEventListener('keyup', function(e)
     {
         tanpa_rupiah.value = formatRupiah(this.value);
     }); */
//   </script>