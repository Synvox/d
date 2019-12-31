import D from '../src';

it('can build paths', () => {
  expect(
    new D()
      .m(0, 0)
      .l(100, 100)
      .z()
      .build()
  ).toEqual('m0 0l100 100z');

  expect(
    new D()
      .M(0, 0)
      .L(100, 100)
      .Z()
      .build()
  ).toEqual('M0 0L100 100Z');

  expect(
    new D()
      .M(0, 0)
      .C(10, 10, 20, 10, 20, 20)
      .build()
  ).toEqual('M0 0C10 10 20 10 20 20');

  expect(
    new D()
      .M(0, 0)
      .c(10, 10, 20, 10, 20, 20)
      .build()
  ).toEqual('M0 0c10 10 20 10 20 20');

  expect(
    new D()
      .M(0, 0)
      .t(10, 10)
      .build()
  ).toEqual('M0 0t10 10');

  expect(
    new D()
      .M(0, 0)
      .T(10, 10)
      .build()
  ).toEqual('M0 0T10 10');

  expect(
    new D()
      .H(10)
      .h(10)
      .build()
  ).toEqual('H10h10');

  expect(
    new D()
      .V(10)
      .v(10)
      .build()
  ).toEqual('V10v10');

  expect(
    new D()
      .M(10, 10)
      .s(10, 10, 10, 10)
      .build()
  ).toEqual('M10 10s10 10 10 10');

  expect(
    new D()
      .M(10, 10)
      .S(10, 10, 10, 10)
      .build()
  ).toEqual('M10 10S10 10 10 10');

  expect(
    new D()
      .M(10, 10)
      .q(10, 10, 10, 10)
      .build()
  ).toEqual('M10 10q10 10 10 10');

  expect(
    new D()
      .M(10, 10)
      .Q(10, 10, 10, 10)
      .build()
  ).toEqual('M10 10Q10 10 10 10');

  expect(
    new D()
      .m(0, 0)
      .t(100, 100)
      .z()
      .build()
  ).toEqual('m0 0t100 100z');

  expect(
    new D()
      .m(0, 0)
      .T(100, 100)
      .z()
      .build()
  ).toEqual('m0 0T100 100z');

  expect(new D().A(30, 50, 0, 0, 1, 162.55, 162.45).build()).toEqual(
    'A30 50 0 0 1 162.55 162.45'
  );
  expect(new D().a(30, 50, 0, 0, 1, 162.55, 162.45).build()).toEqual(
    'a30 50 0 0 1 162.55 162.45'
  );

  const path = new D()
    .m(0, 0)
    .l(100, 100)
    .z();

  expect(path.build()).toEqual(path.clone().build());
});
