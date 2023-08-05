import Button from "../components/button";

export default {
  title: "コンポーネント/01. ボタン",
  component: Button,
};

const render_button = ({...args}) => <Button {...args} />

export const Primary = {
  args: {
    label: "ボタン",
    type: "primary",
  },
}

export const Secondary = {
  args: {
    label: "ボタン",
    type: "secondary",
  },
}

export const Tertiary = {
  args: {
    label: "ボタン",
    type: "tertiary",
  },
}

// Primary
export const PrimaryWithHover = {
  args: {
    label: "ボタン",
    type: "primary",
  },
  parameters : {
    pseudo: {
      hover: true,
    }
  }
}

export const PrimaryWithActive = {
  args: {
    label: "ボタン",
    type: "primary",
  },
  parameters : {
    pseudo: {
      active: true,
    }
  }
}

export const PrimaryWithFocus = {
  args: {
    label: "ボタン",
    type: "primary",
  },
  parameters : {
    pseudo: {
      focus: true,
    }
  }
}

export const PrimaryDisabled = {
  args: {
    label: "ボタン",
    type: "primary",
    disabled: true,
  },
}

// Secondary
export const SecondaryWithHover = {
  args: {
    label: "ボタン",
    type: "secondary",
  },
  parameters : {
    pseudo: {
      hover: true,
    }
  }
}

export const SecondaryWithActive = {
  args: {
    label: "ボタン",
    type: "secondary",
  },
  parameters : {
    pseudo: {
      active: true,
    }
  }
}

export const SecondaryWithFocus = {
  args: {
    label: "ボタン",
    type: "secondary",
  },
  parameters : {
    pseudo: {
      focus: true,
    }
  }
}

export const SecondaryDisabled = {
  args: {
    label: "ボタン",
    type: "secondary",
    disabled: true,
  },
}


// Tertiary
export const TertiaryWithHover = {
  args: {
    label: "ボタン",
    type: "tertiary",
  },
  parameters : {
    pseudo: {
      hover: true,
    }
  }
}

export const TertiaryWithActive = {
  args: {
    label: "ボタン",
    type: "tertiary",
  },
  parameters : {
    pseudo: {
      active: true,
    }
  }
}

export const TertiaryWithFocus = {
  args: {
    label: "ボタン",
    type: "tertiary",
  },
  parameters : {
    pseudo: {
      focus: true,
    },
  }
}

export const TertiaryDisabled = {
  args: {
    label: "ボタン",
    type: "tertiary",
    disabled: true,
  },
}
