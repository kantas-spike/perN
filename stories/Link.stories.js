import Link from "../components/link";

export default {
  title: "コンポーネント/02. リンクテキスト",
  component: Link,
};

const url_suffix = Date.now();

function getSampleUrl(url, ampSuffix = false) {
  if (ampSuffix) {
    return `${url}&${url_suffix}`;
  } else {
    return `${url}?${url_suffix}`;
  }
}

export const Internal = {
  args: {
    children: "スタイル | 01-カラー",
    href: getSampleUrl("/?path=/docs/スタイル-01-カラー--docs", true),
  },
};

export const InternalWithFocused = {
  args: {
    children: "スタイル | 01-カラー",
    href: getSampleUrl("/?path=/docs/スタイル-01-カラー--docs", true),
  },
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};

export const InternalWithHover = {
  args: {
    children: "スタイル | 01-カラー",
    href: getSampleUrl("/?path=/docs/スタイル-01-カラー--docs", true),
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const InternalWithActive = {
  args: {
    children: "スタイル | 01-カラー",
    href: getSampleUrl("/?path=/docs/スタイル-01-カラー--docs", true),
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const InternalWithVisited = {
  args: {
    children: "スタイル | 01-カラー",
    href: getSampleUrl("/?path=/docs/スタイル-01-カラー--docs", true),
  },
  parameters: {
    pseudo: {
      visited: true,
    },
  },
};

const example_of_text = ({ href, children, className, isExternal = false }) => (
  <>
    <div
      className={`rounded-md border border-outline bg-surface p-4  text-on-surface ${className}`}
    >
      <div className="my-s max-w-[40rem]">
        この文章は、
        <Link href={href} isExternal={isExternal}>
          {children}
        </Link>{" "}
        を<br />
        参考に作成しています。
      </div>
      <div className="my-s max-w-[40rem]">
        リンクがない場合は、こんな感じです。
        <br />
        行間隔のイメージはどうでしょうか？
      </div>
    </div>
  </>
);

export const External = {
  args: {
    children: "デジタル庁  デザインシステム",
    href: getSampleUrl(
      "https://www.digital.go.jp/policies/servicedesign/designsystem/",
    ),
    isExternal: true,
  },
};

export const ExternalWithFocused = {
  args: {
    children: "デジタル庁  デザインシステム",
    href: getSampleUrl(
      "https://www.digital.go.jp/policies/servicedesign/designsystem/",
    ),
    isExternal: true,
  },
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};

export const ExternalWithHover = {
  args: {
    children: "デジタル庁  デザインシステム",
    href: getSampleUrl(
      "https://www.digital.go.jp/policies/servicedesign/designsystem/",
    ),
    isExternal: true,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const ExternalWithActive = {
  args: {
    children: "デジタル庁  デザインシステム",
    href: getSampleUrl(
      "https://www.digital.go.jp/policies/servicedesign/designsystem/",
    ),
    isExternal: true,
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const ExternalWithVisited = {
  args: {
    children: "デジタル庁  デザインシステム",
    href: getSampleUrl(
      "https://www.digital.go.jp/policies/servicedesign/designsystem/",
    ),
    isExternal: true,
  },
  parameters: {
    pseudo: {
      visited: true,
    },
  },
};

export const InternalBodyL = {
  args: {
    children: "デジタル庁  デザインシステム",
    href: getSampleUrl(
      "https://www.digital.go.jp/policies/servicedesign/designsystem/",
    ),
    className: "txt-body-l",
  },
  render: example_of_text,
};

export const InternalBodyM = {
  args: {
    children: "デジタル庁  デザインシステム",
    href: getSampleUrl(
      "https://www.digital.go.jp/policies/servicedesign/designsystem/",
    ),
    className: "txt-body-m",
  },
  render: example_of_text,
};

export const ExternalBodyL = {
  args: {
    children: "デジタル庁  デザインシステム",
    href: getSampleUrl(
      "https://www.digital.go.jp/policies/servicedesign/designsystem/",
    ),
    isExternal: true,
    className: "txt-body-l",
  },
  render: example_of_text,
};

export const ExternalBodyM = {
  args: {
    children: "デジタル庁  デザインシステム",
    href: getSampleUrl(
      "https://www.digital.go.jp/policies/servicedesign/designsystem/",
    ),
    isExternal: true,
    className: "txt-body-m",
  },
  render: example_of_text,
};
