// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by categories in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-highlights",
          title: "highlights",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/highlights/";
          },
        },{id: "nav-dissemination",
          title: "dissemination",
          description: "Various dissemination activities in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/dissemination/";
          },
        },{id: "nav-awards",
          title: "awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-webinars",
          title: "webinars",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/webinars/";
          },
        },{id: "nav-education",
          title: "education",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/education/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-xrd-ct-study-of-3d-printed-commercial-and-non-commercial-catalysts",
          title: 'XRD-CT study of 3D printed commercial and non-commercial catalysts',
          description: "3D printed Ni/Al2O3 based catalysts for CO2 methanation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3dprinted/";
            },},{id: "projects-five-dimensional-imaging",
          title: 'Five-dimensional Imaging',
          description: "First 5D operando tomographic diffraction imaging achieved using a continuous rotation-translation approach.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5d/";
            },},{id: "projects-battery-imaging-library-bil",
          title: 'Battery Imaging Library (BIL)',
          description: "An open, multi-modal, multi-length-scale dataset hub for battery imaging (X-ray CT, XRD-CT, SEM/EDX, EBSD and many more), designed for benchmarking and teaching.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/battery-imaging-library/";
            },},{id: "projects-spatial-quantification-of-dynamic-inter-and-intra-particle-crystallographic-heterogeneities-within-lithium-ion-electrodes",
          title: 'Spatial quantification of dynamic inter and intra particle crystallographic heterogeneities within lithium ion...',
          description: "Operando high-resolution X-ray diffraction-computed tomography is used to spatially and temporally quantify crystallographic heterogeneities within and between particles throughout both fresh and degraded LixMn2O4 electrodes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/battery_lmo/";
            },},{id: "projects-revealing-chemical-heterogeneities-inside-an-intact-18650-nca-li-ion-battery-during-cycling",
          title: 'Revealing chemical heterogeneities inside an intact 18650 NCA Li-ion battery during cycling',
          description: "First dynamic XRD-CT experiment with a cylindrical Li-ion battery",
          section: "Projects",handler: () => {
              window.location.href = "/projects/battery_nca_18650/";
            },},{id: "projects-cycling-rate-induced-spatially-resolved-heterogeneities-in-commercial-cylindrical-li-ion-batteries",
          title: 'Cycling Rate-Induced Spatially-Resolved Heterogeneities in Commercial Cylindrical Li-Ion Batteries',
          description: "First XRD-CT study using cylindrical Li-ion batteries",
          section: "Projects",handler: () => {
              window.location.href = "/projects/battery_nmc532_10440/";
            },},{id: "projects-spatially-resolving-lithiation-in-silicon-graphite-composite-electrodes-via-in-situ-high-energy-x-ray-diffraction-computed-tomography",
          title: 'Spatially Resolving Lithiation in Silicon–Graphite Composite Electrodes via in Situ High-Energy X-ray Diffraction...',
          description: "Combined high-speed XRD and XRD-CT to probe crystallographic heterogeneities within Li-ion electrodes with a spatial resolution of 1 μm.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/battery_sig/";
            },},{id: "projects-beamstop",
          title: 'Beamstop',
          description: "Finden’s first commercial software for chemical imaging and tomography data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/beamstop/";
            },},{id: "projects-operando-xrd-ct-of-catalytic-membrane-reactors",
          title: 'Operando XRD-CT of catalytic membrane reactors',
          description: "Investigation of catalytic membrane reactors during the oxidative coupling of methane reaction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cmr/";
            },},{id: "projects-dlsr",
          title: 'DLSR',
          description: "A solution to the parallax artefact in X-ray diffraction computed tomography data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dlsr/";
            },},{id: "projects-single-crystal-diffraction-artefacts",
          title: 'Single-crystal diffraction artefacts',
          description: "Removing multiple outliers and single-crystal artefacts from X-ray diffraction computed tomography data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/filters/";
            },},{id: "projects-high-res-dinov2",
          title: 'High-Res DINOv2',
          description: "Upsampling spatialised features from vision transformer (ViT) models like DINOv2 for unsupervised and weakly-supervised materials segmentation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hrdv2/";
            },},{id: "projects-interlaced-x-ray-diffraction-computed-tomography",
          title: 'Interlaced X-ray diffraction computed tomography',
          description: "A data-collection strategy that allows, post experiment, a choice between temporal and spatial resolution.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/interlaced/";
            },},{id: "projects-ndtomo",
          title: 'nDTomo',
          description: "A modular Python toolkit for X-ray chemical imaging and tomography (with a focus on hyperspectral modalities such as XRD-CT).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ndtomo/";
            },},{id: "projects-multi-length-scale-chemical-tomography-of-an-operating-catalyst-bed",
          title: 'Multi-length scale chemical tomography of an operating catalyst bed',
          description: "Operando spatially-resolved experiments performed with XRD-CT (catalytic reactor) and multi-modal μ-XRF/XRD/absorption CT (single catalyst particle) during the oxidative coupling of methane reaction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ocm/";
            },},{id: "projects-parallaxnet",
          title: 'ParallaxNet',
          description: "Eliminate parallax artefacts present in X-ray powder diffraction computed tomography data acquired from large samples.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/parallaxnet/";
            },},{id: "projects-imaging-heterogeneous-electrocatalyst-stability-and-decoupling-degradation-mechanisms-in-operating-hydrogen-fuel-cells",
          title: 'Imaging Heterogeneous Electrocatalyst Stability and Decoupling Degradation Mechanisms in Operating Hydrogen Fuel Cells...',
          description: "First dynamic XRD-CT experiment with a PEM fuel cell",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pemfc/";
            },},{id: "projects-multi-length-scale-5d-diffraction-imaging-of-a-catalyst-bed",
          title: 'Multi-length scale 5D diffraction imaging of a catalyst bed',
          description: "Operando XRD spatially-resolved experiment of a catalytic reactor during the partial oxidation of methane reaction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pox/";
            },},{id: "projects-pq-net",
          title: 'PQ-Net',
          description: "A deep convolutional neural network for real-time full profile analysis of big powder diffraction data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pqnet/";
            },},{id: "projects-samba",
          title: 'SAMBA',
          description: "SAMBA is a trainable segmentation tool for materials science that uses deep learning for fast, high-quality labels and random forests for robust, generalizable segmentations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/samba/";
            },},{id: "projects-sd2i",
          title: 'SD2I',
          description: "The Single Digit to Image (SD2I) tensorflow-based image reconstruction tool.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sd2i/";
            },},{id: "projects-investigation-of-the-mechanical-robustness-performance-of-an-sofc-during-thermal-cycling",
          title: 'Investigation of the mechanical robustness/performance of an SOFC during thermal cycling',
          description: "First dynamic XRD-CT experiment with a micro-tubular solid oxide fuel cell",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sofc/";
            },},{id: "projects-vulture",
          title: 'Vulture',
          description: "Convolutional upsampling of DINOv2 features for weakly supervised segmentation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vulture/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
