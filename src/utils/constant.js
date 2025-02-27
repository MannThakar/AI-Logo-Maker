export const COLOR_PALETTE = [
  {
    id: 1,
    name: "Let Us Select",
    colors: ["#ff5733", "#33ff57", "#3357ff", "#ff33a8", "#f4ff33"],
  },
  {
    id: 2,
    name: "Ocean Blues",
    colors: ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087"],
  },
  {
    id: 3,
    name: "Sunset Warmth",
    colors: ["#ff6f61", "#ff8566", "#ff9f6b", "#ffb774", "#ffd382"],
  },
  {
    id: 4,
    name: "Forest Greens",
    colors: ["#2a6f4e", "#3e8e68", "#56a581", "#70bd9b", "#8fd6b5"],
  },
  {
    id: 5,
    name: "Earthy Browns",
    colors: ["#5d4037", "#795548", "#8d6e63", "#a1887f", "#d7ccc8"],
  },
  {
    id: 6,
    name: "Soft Purples",
    colors: ["#6a1b9a", "#7b1fa2", "#8e24aa", "#9c27b0", "#ab47bc"],
  },
];

export const HERO_HEADING = {
  title: "Create Stunning Logos with",
  keyword: " AI Precision",
  subtitle: "AI-Powered Logo Maker for Modern Brands",
  description:
    "Transform your ideas into professional logos with Liva, the ultimate AI-powered logo design platform. Experience intelligent creativity, unmatched customization.",
};

export const LOGO_TEMPLATES = [
  {
    //chatGpt
    title: "Cartoon Logo",
    image: "/logo_style/design_1.png",
    prompt:
      "Create a set of vibrant, playful logo designs featuring cartoon-style characters with puns or witty text. Each logo should include a cute anthropomorphic object, animal, or food item with expressive features like sunglasses, hats, or smiles, combined with a short, pun-based slogan. Use bold colors, clean lines, and retro aesthetics, ensuring the design is eye-catching and cheerful. Place each logo against a dark background to make the colors pop",
  },
  {
    //chatGpt
    title: "App Logo",
    image: "/logo_style/design_2.png",
    prompt:
      "Create a vibrant and playful 3D logo for an app. The design should feature bold, colorful text with a glossy finish. Include an icon relevant to the apps theme above the text and a background that complements the concept, such as a bright outdoor scene with natural elements like green grass, a blue sky, and fluffy white clouds. Use a rounded square frame with a yellow border and subtle shadows for a polished and inviting look",
  },
  {
    //chatGpt
    title: "Modern Mascot Logos",
    image: "/logo_style/design_3.png",
    prompt:
      "A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character.",
  },
  {
    //Gemini
    title: "Black And White Line Logos",
    image: "/logo_style/design_4.png",
    prompt:
      "Create a minimalist and modern logo design that is clean, simple, and visually appealing. The logo should be easy to recognize and remember, and it should be versatile enough to be used in a variety of contexts. Use a combination of typography and simple geometric shapes to create a visually striking and memorable design. The logo should be timeless and elegant, and it should convey a sense of professionalism and sophistication.",
  },
  {
    title: "Minimalists And Elegants Logos",
    image: "/logo_style/design_5.png",
    prompt:
      "Create a sophisticated and elegant logo design that is inspired by nature and vintage aesthetics. The logo should incorporate elements of symbolism, intricate details, and a touch of mystery. Use a combination of typography, line art, and subtle color palettes to create a timeless and visually striking design. The logo should convey a sense of luxury, tradition, and quality.",
  },
  {
    title: "Vintage Custom Logos",
    image: "/logo_style/design_6.png",
    prompt:
      "Generate a vintage, hand-drawn logo in a circular format. The logo should feature a central illustration, such as a symbol, icon, or image related to the brands identity. The illustration should be detailed and stylized, with a focus on linework and shading. The logo should also include the brand name, written in a vintage, decorative font. The overall aesthetic should be retro and nostalgic, evoking a sense of tradition and quality.",
  },
  {
    title: "Modern Sharp Lined Logos",
    image: "/logo_style/design_7.png",
    prompt: `Design a creative and artistic logo with a retro-modern vibe that showcases the brand's identity. Use bold outlines, intricate patterns, and vibrant, contrasting colors to make the design pop. Incorporate thematic elements like food, nature, technology, or lifestyle symbols depending on the brand's niche. The typography should be playful yet clear, complementing the overall composition with a dynamic and balanced layout. Ensure the logo feels unique, versatile, and eye-catching`,
  },
  {
    title: "Custom Luxury Logo Designs",
    image: "/logo_style/design_8.png",
    prompt: `Create a set of luxurious, elegant, and professional logos with a gold metallic finish on a dark background. Include a variety of themes, such as animals, letters, symbols, and nature-inspired designs. Each logo should convey sophistication, premium quality, and modern aesthetics, suitable for any brand or industry.`,
  },
  {
    title: "Vintage Logo Designs With Text & Icon",
    image: "/logo_style/design_9.png",
    prompt:
      "Design a collection of vintage-inspired logos with a hand-drawn, artistic style. Incorporate a variety of themes, including food, animals, characters, and unique brand elements. Each logo should feature bold typography, intricate details, and a retro aesthetic that is versatile and suitable for diverse brands or businesses.",
  },
];

export const PROMPT = {
  DESIGN_IDEA_PROMPT:
    "Based on Logo of type {logoType} Generate a text prompt to create Logo for Logo title/Brand name : {logoTitle} with decription: {logoDesc} and refering to prompt: {logoPrompt}. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format",
  LOGO_PROMPT:
    "Generate a text prompt to create Logo for Logo Title/Brand name : {logoTitle},with description: {logoDesc}, with Color combination of {logoColor}, also include the {logoIdea} and include {logoDesign} design idea and Referring to this Logo Prompt:{logoPrompt}  Give me result in JSON portal with prompt field only",
};

("Based on Logo of type Modern Mascot Logos Generate a text prompt to create Logo for Logo title/Brand name : Indian Restraurant  with decription: Indian food and food related business and refering to prompt: A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character.. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format");

export const FORM_DATA = {
  firstFormTitle: "Give your logo a title",
  firstFormDescription:
    "Add Your Business, App, or Website Name for a Custom Logo",
  secondFormTitle: "Describe Your Logo Vision",
  secondFormDescription:
    "Share your ideas, themes, or inspirations to create a logo that perfectly represents your brand or project.",
  thirdFormTitle: "Choose Your Color Palette",
  thirdFormDescription:
    "Pick the colors that reflect your brands personality and create a lasting impression.",
  fourthFormTitle: "Choose Your Logo Style",
  fourthFormDescription:
    "Select the type of logo design that best represents your brands unique identity.",
  fifthFormTitle: "Select Your Design Idea",
  fifthFormDescription:
    "Choose a design style that aligns with your vision, or skip to receive a random suggestion.",
  sixthFormTitle: "Select your AI Model Plan",
  sixthFormDescription: "Generate Unlimted Fast Logo with your fav model",
  pricingOption: [
    {
      title: "Free",
      icon: "/free.png", // Add your free plan icon here
      description: "Generate unlimited logos for free",
      features: [
        "Generate unlimited logos for free",
        "Longer wait times",
        "Wait time: 30 seconds to 3 minutes",
        "Limited Design Options and Quality",
        "Slow (Not Recommended)",
      ],
      button: "Generate Free",
    },
    {
      title: "Premium",
      description: "Generate unlimited logos for fast",
      icon: "/thunder.png", // Add your premium plan icon here
      features: [
        "Generate unlimited logos",
        "Shorter wait times",
        "Wait time: Less than 10 seconds",
        "Only 5 Credits",
        "Fast, Inteligent and Reccomended",
      ],
      button: "Generate Free",
    },
  ],
};
