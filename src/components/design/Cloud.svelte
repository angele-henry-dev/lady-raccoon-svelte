<div {...$$restProps}>
    <div class="cloud">
        <span></span>
    </div>
</div>

<style>
    .cloud {
        position: relative;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #adadf5;
        opacity: 0.4;
        animation: float 3s linear infinite alternate;
    }
    .cloud span {
        position: absolute;
        content: "";
        top: 25px;
        left: 70px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #adadf5;
    }
    .cloud::before {
        position: absolute;
        content: "";
        top: -30px;
        left: 40px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #adadf5;
    }
    .cloud::after {
        position: absolute;
        top: 10px;
        left: 100px;
        content: "";
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #adadf5;
    }
    @keyframes float {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-10px);
        }
    }
</style>
