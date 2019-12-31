export default class D {
  private d: string;

  constructor() {
    this.d = '';
  }

  m(x: number, y: number) {
    this.d += `m${x} ${y}`;
    return this;
  }

  M(x: number, y: number) {
    this.d += `M${x} ${y}`;
    return this;
  }

  l(x: number, y: number) {
    this.d += `l${x} ${y}`;
    return this;
  }

  L(x: number, y: number) {
    this.d += `L${x} ${y}`;
    return this;
  }

  h(x: number) {
    this.d += `h${x}`;
    return this;
  }

  H(x: number) {
    this.d += `H${x}`;
    return this;
  }

  v(y: number) {
    this.d += `v${y}`;
    return this;
  }

  V(y: number) {
    this.d += `V${y}`;
    return this;
  }

  z() {
    this.d += `z`;
    return this;
  }

  Z() {
    this.d += `Z`;
    return this;
  }

  C(x1: number, y1: number, x2: number, y2: number, x: number, y: number) {
    this.d += `C${x1} ${y1} ${x2} ${y2} ${x} ${y}`;
    return this;
  }

  c(x1: number, y1: number, x2: number, y2: number, x: number, y: number) {
    this.d += `c${x1} ${y1} ${x2} ${y2} ${x} ${y}`;
    return this;
  }

  s(x2: number, y2: number, x: number, y: number) {
    this.d += `s${x2} ${y2} ${x} ${y}`;
    return this;
  }

  S(x2: number, y2: number, x: number, y: number) {
    this.d += `S${x2} ${y2} ${x} ${y}`;
    return this;
  }

  q(x1: number, y1: number, x: number, y: number) {
    this.d += `q${x1} ${y1} ${x} ${y}`;
    return this;
  }

  Q(x1: number, y1: number, x: number, y: number) {
    this.d += `Q${x1} ${y1} ${x} ${y}`;
    return this;
  }

  t(x: number, y: number) {
    this.d += `t${x} ${y}`;
    return this;
  }

  T(x: number, y: number) {
    this.d += `T${x} ${y}`;
    return this;
  }

  A(
    rx: number,
    ry: number,
    xAxisRotation: number,
    largeArcSweepFlag: number,
    sweepFlag: number,
    x: number,
    y: number
  ) {
    this.d += `A${rx} ${ry} ${xAxisRotation} ${largeArcSweepFlag} ${sweepFlag} ${x} ${y}`;
    return this;
  }

  a(
    rx: number,
    ry: number,
    xAxisRotation: number,
    largeArcSweepFlag: number,
    sweepFlag: number,
    x: number,
    y: number
  ) {
    this.d += `a${rx} ${ry} ${xAxisRotation} ${largeArcSweepFlag} ${sweepFlag} ${x} ${y}`;
    return this;
  }

  clone() {
    const clone = new D();
    clone.d = this.d;
    return clone;
  }

  build() {
    return this.d;
  }
}
