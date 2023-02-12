export const json = {
  title: "Software developer survey.",
  pages: [
    {
      title: "Result Survey",
      description: {
        default:
          "설문조사에 참여해주셔서 감사합니다. 총 ?문항이며 예상 소요시간은 ?분입니다."
      },
      logo: {
        default:
          "https://static.toastoven.net/toast/resources/img/[NHNCloud]_Opengraph.png"
      },
      logoWidth: "100px",
      logoHeight: "100px",
      logoPosition: "right",
      elements: [
        {
          title: "Personal Information",
          type: "panel",
          name: "personal-info",
          elements: [
            {
              type: "text",
              name: "user-name",
              title: "User name",
              isRequired: true
            },
            {
              type: "text",
              name: "team-name",
              startWithNewLine: false,
              title: "Team",
              isRequired: true
            }
          ]
        }
      ]
    },
    {
      title: "Please check all error cases",
      elements: [
        {
          type: "panel",
          name: "base-panel",
          elements: [
            {
              type: "panel",
              name: "panel-images",
              elements: [
                {
                  type: "panel",
                  name: "panel-model",
                  elements: [
                    {
                      type: "image",
                      name: "pic_model",
                      imageLink:
                        "https://api.surveyjs.io/private/Surveys/files?name=c5b0302a-d6c8-46b4-ac57-7d519d0df0d1",
                      contentMode: "image",
                      imageHeight: 200,
                      imageWidth: 300
                    }
                  ],
                  title: {
                    default: "Fitting Model",
                    ko: "Fitting Model"
                  },
                  description: {
                    default: "model image name",
                    ko: "model image name"
                  },
                  showNumber: false
                },
                {
                  type: "panel",
                  name: "panel-garment",
                  elements: [
                    {
                      type: "image",
                      name: "pic_garment",
                      imageLink:
                        "https://api.surveyjs.io/private/Surveys/files?name=8bcd88b7-df19-466d-8622-19100e400383",
                      contentMode: "image",
                      imageHeight: 200,
                      imageWidth: 300
                    }
                  ],
                  title: {
                    default: "Garment (upper)",
                    ko: "Garment (upper)"
                  },
                  description: {
                    default: "garment image name",
                    ko: "garment image name"
                  },
                  startWithNewLine: false
                },
                {
                  type: "panel",
                  name: "panel-viton",
                  elements: [
                    {
                      type: "image",
                      name: "pic-viton",
                      imageLink:
                        "https://api.surveyjs.io/private/Surveys/files?name=24735b69-0ffe-4e49-9c90-1d9db1c8b83b",
                      contentMode: "image",
                      imageHeight: 200,
                      imageWidth: 300
                    }
                  ],
                  title: {
                    default: "VITON result",
                    ko: "VITON result"
                  },
                  description: "가상피팅 결과입니다.",
                  startWithNewLine: false
                }
              ],
              readOnly: false,
              title: {
                default: "Images",
                ko: "Images"
              }
            },
            {
              type: "panel",
              name: "panel-checkbox",
              elements: [
                {
                  type: "checkbox",
                  name: "question",
                  title: {
                    default: "모두 선택 (오류의 경우 중복선택 가능)",
                    ko: "모두 선택 (오류의 경우 중복선택 가능)"
                  },
                  isRequired: true,
                  showCommentArea: true,
                  commentPlaceholder: {
                    default: "기타 의견이 있으신 경우 작성해주세요"
                  },
                  choices: [
                    "오류0. 자세가 안맞음",
                    "오류1. 어깨가 안맞고 신체영역이 보임",
                    "오류2. 신체/의류 영역 밖에 노이즈 생성 (피팅모델/의류 모두 흰색 배경인 경우)",
                    "오류3. 신체/의류 영역 밖에 노이즈 생성 (배경이 번지는 경우)",
                    "오류4. 신체/의류가 다른 영역으로 번짐",
                    "오류5. 신체/의류 내에 노이즈 생성",
                    "오류6. 의류/신체 테두리 부근에 배경이 번진 경우 (타이트한 parsing map 등으로 인해)",
                    "오류7. 패턴이 유지가 안되는 경우",
                    "오류8. 손주변 노이즈"
                  ],
                  separateSpecialChoices: true,
                  showOtherItem: true,
                  showNoneItem: true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Please enter your name and e-mail",
      elements: [
        {
          type: "text",
          name: "name",
          title: "Name:"
        },
        {
          type: "text",
          name: "email",
          title: "Your e-mail"
        }
      ]
    }
  ]
};
