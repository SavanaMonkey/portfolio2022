document.addEventListener("DOMContentLoaded", function () {
  const accessKey = "XifXj3IrFK4CWGS8UZAFlLc0su0I4TVcYoUZ-ZfpmNo"; // 언스플래쉬에서 발급받은 액세스 키 입력

  // 각 요소에 대한 ID와 키워드를 매핑
  const elementKeywordMap = [
    { id: "title_1", keyword: "wall" }, // title_1 요소 키워드
    { id: "title_2", keyword: "texture" }, // title_2 요소 키워드
  ];

  // 대체 이미지와 크레딧 정보
  const fallbackImages = {
    title_1: {
      url: "./images/fallback1.jpg",
      backgroundPosition: "left",
      credit: {
        name: "Gareth Harper",
      },
    },
    title_2: {
      url: "./images/fallback2.jpg",
      backgroundPosition: "right",
      credit: {
        name: "Maarten Deckers",
      },
    },
  };

  const creditBox = document.getElementById("credit-box");

  document.addEventListener("mousemove", (e) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const boxWidth = creditBox.offsetWidth;
    const boxHeight = creditBox.offsetHeight;

    // 기본 위치 (커서 오른쪽 아래)
    let left = e.pageX + 8;
    let top = e.pageY + 8;

    // 오른쪽 경계 체크
    if (left + boxWidth > viewportWidth) {
      left = e.pageX - boxWidth - 10; // 커서 왼쪽으로 이동
    }
    // 아래쪽 경계 체크
    if (top + boxHeight > viewportHeight) {
      top = e.pageY - boxHeight - 10; // 커서 위쪽으로 이동
    }

    // 화면 안에서 위치를 제한
    left = Math.max(0, Math.min(left, viewportWidth - boxWidth));
    top = Math.max(0, Math.min(top, viewportHeight - boxHeight));

    // 위치 적용
    creditBox.style.left = `${left}px`;
    creditBox.style.top = `${top}px`;
  });

  elementKeywordMap.forEach((item) => {
    const element = document.getElementById(item.id);

    if (!element) {
      console.error(`요소를 찾을 수 없습니다: ${item.id}`);
      return;
    }

    const apiUrl = `https://api.unsplash.com/photos/random?query=${item.keyword}&count=1&client_id=${accessKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const photo = data[0];
        if (photo) {
          const lowResUrl = photo.urls.small;
          element.style.backgroundImage = `url(${lowResUrl}&w=1280&h=720&fit=crop&q=50&fm=webp)`;

          const optimizedUrl = `${photo.urls.regular}&w=1280&h=720&fit=crop&q=80&fm=webp`;
          const highResImage = new Image();
          highResImage.src = optimizedUrl;
          highResImage.onload = () => {
            element.style.backgroundImage = `url(${optimizedUrl})`;
          };

          // 크레딧 정보 설정
          const authorName = photo.user.name;
          const authorLink = photo.user.links.html;

          element.addEventListener("mouseenter", () => {
            creditBox.innerHTML = `
              Photo by <span style="color: #FFD700;">${authorName}</span> on 
              <span style="color: #FFD700;">Unsplash</span>
            `;
            creditBox.style.display = "block";
          });

          element.addEventListener("mouseleave", () => {
            creditBox.style.display = "none";
          });
        }
      })
      .catch((error) => {
        console.error(`Unsplash API 오류 발생 (${item.id}):`, error);

        const fallback = fallbackImages[item.id];
        if (fallback) {
          element.style.backgroundImage = `url(${fallback.url})`;
          element.style.backgroundPosition = fallback.backgroundPosition;

          element.addEventListener("mouseenter", () => {
            creditBox.innerHTML = `
              Photo by <span style="color: #FFD700;">${fallback.credit.name}</span> on <span style="color: #FFD700;">Unsplash</span> 
            `;
            creditBox.style.display = "block";
          });

          element.addEventListener("mouseleave", () => {
            creditBox.style.display = "none";
          });
        }
      });
  });
});
