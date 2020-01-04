export default class D {
  private d: string;
  private _x: number;
  private _y: number;
  private startX: number;
  private startY: number;

  constructor() {
    this.d = '';
    this._x = 0;
    this._y = 0;
    this.startX = 0;
    this.startY = 0;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  m(x: number, y: number) {
    this.d += `m${x} ${y}`;
    this._x += x;
    this._y += y;
    this.startX = this.x;
    this.startY = this.y;
    return this;
  }

  M(x: number, y: number) {
    this.d += `M${x} ${y}`;
    this._x = x;
    this._y = y;
    this.startX = this._x;
    this.startY = this._y;
    return this;
  }

  l(x: number, y: number) {
    this.d += `l${x} ${y}`;
    this._x += x;
    this._y += y;
    return this;
  }

  L(x: number, y: number) {
    this.d += `L${x} ${y}`;
    this._x = x;
    this._y = y;
    return this;
  }

  h(x: number) {
    this.d += `h${x}`;
    this._x += x;
    return this;
  }

  H(x: number) {
    this.d += `H${x}`;
    this._x = x;
    return this;
  }

  v(y: number) {
    this.d += `v${y}`;
    this._y += y;
    return this;
  }

  V(y: number) {
    this.d += `V${y}`;
    this._y = y;
    return this;
  }

  z() {
    this.d += `z`;
    this._x = this.startX;
    this._y = this.startY;
    return this;
  }

  Z() {
    this.d += `Z`;
    this._x = this.startX;
    this._y = this.startY;
    return this;
  }

  C(x1: number, y1: number, x2: number, y2: number, x: number, y: number) {
    this.d += `C${x1} ${y1} ${x2} ${y2} ${x} ${y}`;
    this._x = x;
    this._y = y;
    return this;
  }

  c(x1: number, y1: number, x2: number, y2: number, x: number, y: number) {
    this.d += `c${x1} ${y1} ${x2} ${y2} ${x} ${y}`;
    this._x += x;
    this._y += y;
    return this;
  }

  s(x2: number, y2: number, x: number, y: number) {
    this.d += `s${x2} ${y2} ${x} ${y}`;
    this._x += x;
    this._y += y;
    return this;
  }

  S(x2: number, y2: number, x: number, y: number) {
    this.d += `S${x2} ${y2} ${x} ${y}`;
    this._x = x;
    this._y = y;
    return this;
  }

  q(x1: number, y1: number, x: number, y: number) {
    this.d += `q${x1} ${y1} ${x} ${y}`;
    this._x += x;
    this._y += y;
    return this;
  }

  Q(x1: number, y1: number, x: number, y: number) {
    this.d += `Q${x1} ${y1} ${x} ${y}`;
    this._x = x;
    this._y = y;
    return this;
  }

  t(x: number, y: number) {
    this.d += `t${x} ${y}`;
    this._x += x;
    this._y += y;
    return this;
  }

  T(x: number, y: number) {
    this.d += `T${x} ${y}`;
    this._x = x;
    this._y = y;
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
    this._x = x;
    this._y = y;
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
    this._x += x;
    this._y += y;
    return this;
  }

  clone() {
    const clone = new D();
    Object.assign(clone, this);
    return clone;
  }

  build() {
    return this.d;
  }
}
