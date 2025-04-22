
        // Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Simulating login/registration (just for demo)
        function simulateLogin() {
            alert('Login simulado com sucesso!');
            document.getElementById('login-modal').style.display = 'none';
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                document.querySelector('.nav-links').classList.remove('active');
            });
        });


 document.getElementById("btnEntrar").addEventListener("click", function() {
        window.location.href = "login/login.html"; // Substitua pelo link da página desejada
    });

    document.getElementById("btnRegistro").addEventListener("click", function() {
        window.location.href = "login/registro/registro.html"; // Substitua pelo link da página desejada
    });


    document.getElementById("logo").addEventListener("click", function() {
        window.location.href = "index.html"; // Substitua pelo link da página desejada
    });

    document.getElementById("word").addEventListener("click", function() {
        window.location.href = "niveis/word/NVword.html"; // Substitua pelo link da página desejada
    });

    document.getElementById("comecar").addEventListener("click", function() {
        window.location.href = "login/registro/registro.html"; // Substitua pelo link da página desejada
    });


  

   