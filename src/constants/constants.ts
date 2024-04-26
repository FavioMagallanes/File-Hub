export const HERO_TEXTS = {
  FILEHUB: "FileHub",
  SECURE_AND_EFFORTLESS_FILE_MANAGEMENT:
    "Secure and Effortless File Management",
  OPTIMIZE_WORKFLOW:
    "Optimize your workflow with our robust file management solution. Store, share, and collaborate effortlessly.",
};

export const FOOTER_TEXTS = {
  ALL_RIGHTS_RESERVED: "© 2024 FileHub. All rights reserved.",
  TERMS_OF_SERVICE: "Terms of Service",
  PRIVACY: "Privacy",
};

export const LOGIN_INPUTS_FORM = [
  {
    id: "email",
    label: "Email",
    placeholder: "m@example.com",
    type: "email",
    isLoginForm: true,
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
    isLoginForm: true,
  },
];

export const REGISTER_INPUTS_FORM = [
  {
    id: "name",
    label: "Name",
    placeholder: "Name",
    type: "text",
    isLoginForm: false,
  },
  {
    id: "email",
    label: "Email",
    placeholder: "m@example.com",
    type: "email",
    isLoginForm: false,
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
    isLoginForm: false,
  },
];

export const NOT_FOUND_TEXTS = {
  OOPS: "Oops, the page you're looking for doesn't exist.",
  GO_BACK_HOME: "Go back home",
};

export const FILE_EXTENSIONS_OPTIONS: { value: string; label: string }[] = [
  { value: "pdf", label: "PDF" },
  { value: "doc", label: "Microsoft Word Document" },
  { value: "docx", label: "Microsoft Word Document (Open XML)" },
  { value: "xls", label: "Microsoft Excel Spreadsheet" },
  { value: "xlsx", label: "Microsoft Excel Spreadsheet (Open XML)" },
  { value: "ppt", label: "Microsoft PowerPoint Presentation" },
  { value: "pptx", label: "Microsoft PowerPoint Presentation (Open XML)" },
  { value: "txt", label: "Plain Text Document" },
  { value: "jpg", label: "JPEG Image" },
  { value: "jpeg", label: "JPEG Image" },
  { value: "png", label: "Portable Network Graphics Image" },
  { value: "gif", label: "Graphics Interchange Format Image" },
  { value: "mp3", label: "MP3 Audio" },
  { value: "wav", label: "Waveform Audio" },
  { value: "mp4", label: "MP4 Video" },
  { value: "avi", label: "Audio Video Interleave Video" },
];
