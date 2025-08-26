// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 1. 主页面背景音乐控制（解决浏览器自动播放限制）
    const homeMusic = document.getElementById('homeMusic');
    if (homeMusic) { // 只在主页面执行
        homeMusic.volume = 0.3; // 音量30%，不刺耳
        
        // 点击页面任意位置播放音乐
        document.body.addEventListener('click', function playHomeMusic() {
            homeMusic.play().catch(e => {
                console.log('音乐需要点击播放:', e);
                alert('请点击页面任意位置开启背景音乐～');
            });
            document.body.removeEventListener('click', playHomeMusic);
        });
    }

    // 2. 全局彩屑庆祝效果（主页面+歌曲页面都生效）
    createConfetti();
});

// 彩屑生成函数
function createConfetti() {
    const colors = ['#FF7EB9', '#A78BFA', '#FBBF24', '#60A5FA', '#4ADE80', '#F87171'];
    const container = document.body;
    
    // 生成100个彩屑
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        // 随机颜色、位置、大小
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `-${Math.random() * 20}px`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(confetti);
        
        // 5秒后移除彩屑，避免占用内存
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
    
    // 每隔10秒重新生成彩屑，持续