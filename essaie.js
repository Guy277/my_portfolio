    // Configuration générale
    const certificats = [
        { 
            titre: "AWS Certified Solutions Architect", 
            organisme: "Amazon Web Services", 
            date: "2023", 
            description: "Architecture cloud et solutions scalables" 
        },
        { 
            titre: "Google Data Analytics", 
            organisme: "Google", 
            date: "2022", 
            description: "Analyse de données avancée avec BigQuery" 
        }
    ];

    // Initialisation
    document.addEventListener('DOMContentLoaded', () => {
        // Dark Mode
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            themeToggle.querySelector('i').classList.toggle('fa-sun');
        });

        // Génération des certificats
        const certificatsContainer = document.getElementById('certificats-container');
        certificats.forEach(cert => {
            certificatsContainer.innerHTML += `
                <div class="certificat-card">
                    <h3>${cert.titre}</h3>
                    <p><strong>${cert.organisme}</strong> • ${cert.date}</p>
                    <p>${cert.description}</p>
                </div>
            `;
        });

        // Animation des barres de langue
        document.querySelectorAll('.language-progress-fill').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => bar.style.width = width, 500);
        });

        // Gestion du formulaire
        document.getElementById('contactForm').addEventListener('submit', e => {
            e.preventDefault();
            alert('Message envoyé avec succès !');
            e.target.reset();
        });

        // Scroll Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => entry.isIntersecting && 
                entry.target.classList.add('active'));
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href'))
                    .scrollIntoView({ behavior: 'smooth' });
            });
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("contactForm").addEventListener("submit", function (event) {
            event.preventDefault();
            
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let subject = document.getElementById("subject").value.trim();
            let message = document.getElementById("message").value.trim();
            let confirmation = document.getElementById("confirmation");
    
            if (name && email && subject && message) {
                confirmation.textContent = "Votre message a été envoyé avec succès !";
                confirmation.style.color = "green";
                document.getElementById("contactForm").reset();
            } else {
                confirmation.textContent = "Veuillez remplir tous les champs.";
                confirmation.style.color = "red";
            }
        });
    });
    