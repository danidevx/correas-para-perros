/* ================= 3D PARALLAX EFFECT ================= */

document.querySelectorAll('.card-3d').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
});

/* ================= CART COUNTER ================= */

let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cartCount').innerText = cartCount;

    const badge = document.getElementById('cartCount');
    badge.classList.remove('animate-bounce');
    void badge.offsetWidth;
    badge.classList.add('animate-bounce');
}

/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
