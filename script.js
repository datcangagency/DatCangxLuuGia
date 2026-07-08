document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for Scroll Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Kích hoạt khi 15% phần tử xuất hiện trên màn hình
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Thêm class 'active' để kích hoạt animation CSS
                entry.target.classList.add('active');
                
                // Ngừng theo dõi sau khi đã reveal để tối ưu hiệu suất
                // (Bỏ comment dòng dưới nếu chỉ muốn reveal 1 lần)
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Bắt đầu theo dõi tất cả các phần tử có class 'reveal'
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Header background change on scroll for better readability
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.9)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.6)';
            header.style.boxShadow = 'none';
        }
    });
});
