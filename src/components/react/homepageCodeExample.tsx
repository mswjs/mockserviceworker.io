// This website uses a rehype plugin to implement code
// syntax highlighting in MDX files. It cannot be used in
// React directly, so here we are.

export function HomepageCodeExample() {
  return (
    <pre
      style={{ backgroundColor: "#24292e" }}
      tabIndex={0}
      data-language="js"
      data-theme="default"
    >
      <code data-language="js" data-theme="default" style={{ display: "grid" }}>
        <span data-line="">
          <span style={{ color: "#F97583" }}>import</span>
          <span style={{ color: "#E1E4E8" }}>{` { http, HttpResponse } `}</span>
          <span style={{ color: "#F97583" }}>from</span>
          <span style={{ color: "#E1E4E8" }}> </span>
          <span style={{ color: "#9ECBFF" }}>'msw'</span>
        </span>
        <span data-line="">
          <span style={{ color: "#F97583" }}>import</span>
          <span style={{ color: "#E1E4E8" }}>{` { setupWorker } `}</span>
          <span style={{ color: "#F97583" }}>from</span>
          <span style={{ color: "#E1E4E8" }}> </span>
          <span style={{ color: "#9ECBFF" }}>'msw/browser'</span>
        </span>
        <span data-line=""> </span>
        <span data-line="">
          <span style={{ color: "#6A737D" }}>// Describe the network.</span>
        </span>
        <span data-line="">
          <span style={{ color: "#F97583" }}>const</span>
          <span style={{ color: "#E1E4E8" }}> </span>
          <span style={{ color: "#79B8FF" }}>handlers</span>
          <span style={{ color: "#E1E4E8" }}> </span>
          <span style={{ color: "#F97583" }}>=</span>
          <span style={{ color: "#E1E4E8" }}>{` [`}</span>
        </span>
        <span data-line="">
          <span style={{ color: "#E1E4E8" }}>{"  "}http.</span>
          <span style={{ color: "#B392F0" }}>get</span>
          <span style={{ color: "#E1E4E8" }}>{`(`}</span>
          <span style={{ color: "#9ECBFF" }}>
            'https://acme.com/product/:id'
          </span>
          <span style={{ color: "#E1E4E8" }}>,{` ({ `}</span>
          <span style={{ color: "#FFAB70" }}>params</span>
          <span style={{ color: "#E1E4E8" }}>{` }) `}</span>
          <span style={{ color: "#F97583" }}>=&gt;</span>
          <span style={{ color: "#E1E4E8" }}>{` {`}</span>
        </span>
        <span data-line="">
          <span style={{ color: "#E1E4E8" }}>{"  "}</span>
          <span style={{ color: "#F97583" }}>{"  "}return</span>
          <span style={{ color: "#E1E4E8" }}> HttpResponse.</span>
          <span style={{ color: "#B392F0" }}>json</span>
          <span style={{ color: "#E1E4E8" }}>{`({`}</span>
        </span>
        <span data-line="">
          <span style={{ color: "#E1E4E8" }}>{"      "}id: params.id,</span>
        </span>
        <span data-line="">
          <span style={{ color: "#E1E4E8" }}>{"      "}title: </span>
          <span style={{ color: "#9ECBFF" }}>'Porcelain Mug'</span>
          <span style={{ color: "#E1E4E8" }}>,</span>
        </span>
        <span data-line="">
          <span style={{ color: "#E1E4E8" }}>{"      "}price: </span>
          <span style={{ color: "#79B8FF" }}>9.99</span>
          <span style={{ color: "#E1E4E8" }}>,</span>
        </span>
        <span data-line="">
          <span style={{ color: "#E1E4E8" }}>{`    })`}</span>
        </span>
        <span data-line="">
          <span style={{ color: "#E1E4E8" }}>{`  }),`}</span>
        </span>
        <span data-line="">
          <span style={{ color: "#E1E4E8" }}>{`]`}</span>
        </span>
        <span data-line=""> </span>
        <span data-line="">
          <span style={{ color: "#6A737D" }}>
            // Enable API mocking anywhere.
          </span>
        </span>
        <span data-line="">
          <span style={{ color: "#F97583" }}>const</span>
          <span style={{ color: "#E1E4E8" }}> </span>
          <span style={{ color: "#79B8FF" }}>worker</span>
          <span style={{ color: "#E1E4E8" }}> </span>
          <span style={{ color: "#F97583" }}>=</span>
          <span style={{ color: "#E1E4E8" }}> </span>
          <span style={{ color: "#B392F0" }}>setupWorker</span>
          <span style={{ color: "#E1E4E8" }}>(</span>
          <span style={{ color: "#F97583" }}>...</span>
          <span style={{ color: "#E1E4E8" }}>{`handlers)`}</span>
        </span>
        <span data-line="">
          <span style={{ color: "#E1E4E8" }}>worker.</span>
          <span style={{ color: "#B392F0" }}>start</span>
          <span style={{ color: "#E1E4E8" }}>()</span>
        </span>
      </code>
    </pre>
  );
}
