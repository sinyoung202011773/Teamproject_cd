
// 랜덤으로 답변 주는 것.
const botResponses = [
    "안녕하세요! 반가워요!",
    "잘 듣고 있어요!",
    "무엇을 도와드릴까요?",
    "그래요?",
    "이야기해줘서 고마워요!",
    "더 궁금한 건 있나요?"
];

document.getElementById("send-button").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("message-input").addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// 사용자가 메시지를 보낼 때 호출되는 함수
function sendMessage() {
    // 입력된 메시지 가져오기
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim(); // 양쪽의 공백 제거

    // 입력된 메시지가 비어있지 않은 경우에만 처리
    if (message !== "") {
        // 채팅창 요소 가져오기
        var chatBox = document.getElementById("chat-box");

        // 사용자 메시지 생성
        var newMessage = document.createElement("div"); // 새로운 div 요소 생성
        newMessage.classList.add("chat-message"); // chat-message 클래스 추가
        newMessage.innerHTML = '<div class="user-chat"> \
                                    <div class="image"> <img class="profile-image" src="image/user.png"></div> \
                                    <div class="user"> <div class="user-name">User: </div> <span class="user-message">' + message + '</span> </div> \
                                </div>'; // 유저 메시지 추가될 html 코드.

        chatBox.appendChild(newMessage); // 채팅창에 추가

        // ChatGPT의 랜덤한 응답 선택
        var randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

        // ChatGPT 메시지 생성
        var botMessage = document.createElement("div"); // 새로운 div 요소 생성
        botMessage.classList.add("chat-message"); // chat-message 클래스 추가
        botMessage.innerHTML = '<div class="bot-chat"> \
                                    <div class="image"> <img class="profile-image" src="image/live-chat.png"></div> \
                                    <div class="bot"> <div class="bot-name">일꾼Bot: </div> <span class="bot-message">' + randomResponse + '</span> </div> \
                                </div>'; // 내용 설정
        chatBox.appendChild(botMessage); // 채팅창에 추가

        // 입력창 비우기
        messageInput.value = "";

        // 채팅창 스크롤 맨 아래로 이동
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}


// 채팅창 크기 자동 조절
const messageInput = document.getElementById('message-input');
function resizeInout() {
    messageInput.style.height = 'auto';
    messageInput.style.height = messageInput.scrollHeight + 'px';
}

messageInput.addEventListener('input',resizeInout);
resizeInout();


// 버튼 클릭 시, 채팅창 크기 다시 초기화.
function clearTextArea() {
    messageInput.style.height = 'auto'; 
    messageInput.style.height = 'initial'; // 입력 칸의 초기 높이로 재설정
  }
