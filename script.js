let data = {};

function generateId() {
  return "HP-" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

function analyzeImage() {

  const input = document.getElementById("imageInput");

  if (!input.files.length) {
    alert("Upload image");
    return;
  }

  document.getElementById("loading").classList.remove("hidden");

  setTimeout(() => {

    document.getElementById("loading").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");

    data = {
      id: generateId(),
      undertone: ["Warm","Cool","Neutral"][Math.floor(Math.random()*3)],
      brightness: ["Soft","Bright"][Math.floor(Math.random()*2)],
      depth: ["Light","Deep"][Math.floor(Math.random()*2)]
    };

    document.getElementById("analysisId").innerText = data.id;

    document.getElementById("analysisText").innerHTML = `
      <p><b>Undertone:</b> ${data.undertone}</p>
      <p><b>Brightness:</b> ${data.brightness}</p>
      <p><b>Depth:</b> ${data.depth}</p>
    `;

  },1000);
}

function openForm() {

  const id = data.id;

  const results = `
Undertone: ${data.undertone}
Brightness: ${data.brightness}
Depth: ${data.depth}
`;

  const formURL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdHudU7hDvQoZ0RG3okL2gmEX0PWRwYdoWDOir-4WCUZ8R3Vg/viewform?usp=pp_url"
  + "&entry.917655531=" + encodeURIComponent(id)
  + "&entry.1536583901=" + encodeURIComponent(results);

  window.open(formURL, "_blank");
}
