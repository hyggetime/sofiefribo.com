# 이미지 에셋

이 폴더의 파일은 빌드 시 그대로 복사되어 **사이트 루트**에서 제공됩니다.

## 사용 방법

파일을 넣은 뒤 페이지에서는 경로를 **슬래시로 시작**해 씁니다.

```html
<img src="/images/hero/main.jpg" alt="..." />
```

Astro 예:

```astro
<img src="/images/projects/01-cover.jpg" alt="..." />
```

## 하위 폴더 (권장)


| 폴더          | 용도           |
| ----------- | ------------ |
| `hero/`     | 메인 히어로 일러스트  |
| `about/`    | 소개 섹션        |
| `projects/` | 프로젝트·갤러리 썸네일 |
| `misc/`     | 아이콘, 배경, 기타  |


파일명은 영문·숫자·하이픈 권장 (예: `bangadari-workshop-01.jpg`).

## 권장 크기 (참고)

`src/pages/index.astro`의 `imgDims`와 맞추면 레이아웃이 안정적입니다.

- Hero: **1400×1400** px (정사각) · About: **720×720** px (정사각)
- Hero 하단 원형 썸네일: **180×180** px
- Project 썸네일: **800×600** px
- 스킬 아이콘: **112×112** px

WebP 또는 JPG, 용량은 가급적 500KB 이하 권장.