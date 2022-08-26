import {grade_conversions, american_date, remove_surname, new_format} from './conversions'

describe('Individual functions', () => {

  test('grade conversion', () => {
    expect(grade_conversions(99)).toBe('A');
    expect(grade_conversions(93)).toBe('A');
    expect(grade_conversions(91)).toBe('A-');
    expect(grade_conversions(86)).toBe('B');
    expect(grade_conversions(84)).toBe('B');
    expect(grade_conversions(83)).toBe('B');
    expect(grade_conversions(75)).toBe('C');
    expect(grade_conversions(71)).toBe('C-');
  });

  test('date conversion', () => {
    expect(american_date('24/06/2021')).toBe('06/24/2021');
    expect(american_date('24/06/2021')).not.toBe('24/06/2021');
    expect(american_date('18/12/2021')).toBe('12/18/2021');
    expect(american_date('18/12/2021')).not.toBe('18/12/2021');
    expect(american_date('19/12/2021')).toBe('12/19/2021');
    expect(american_date('19/12/2021')).not.toBe('19/12/2021');
    expect(american_date('22/06/2022')).toBe('06/22/2022');
    expect(american_date('22/06/2022')).not.toBe('22/06/2022');
    expect(american_date('23/06/2022')).toBe('06/23/2022');
    expect(american_date('23/06/2022')).not.toBe('23/06/2022');
    expect(american_date('15/12/2022')).toBe('12/15/2022');
    expect(american_date('15/12/2022')).not.toBe('15/12/2022');
  });

  test('renove surname', () => {
    expect(remove_surname('Loreto Sepúlveda Torres')).toBe('Loreto Sepúlveda');
    expect(remove_surname('Yessica Castillo Noguera')).toBe('Yessica Castillo');
    expect(remove_surname('Valentín Caro García')).toBe('Valentín Caro');
    expect(remove_surname('Virginia Rodríquez Guerra')).toBe('Virginia Rodríquez');
    expect(remove_surname('Inocencio Arreola Soto')).toBe('Inocencio Arreola');
    expect(remove_surname('Benito Ramos Félix')).toBe('Benito Ramos');
    expect(remove_surname('Bernardina González Fontana')).toBe('Bernardina González');
    expect(remove_surname('Gloria Mata Vázquez')).toBe('Gloria Mata');
    expect(remove_surname('Amaya Obando Sosa')).toBe('Amaya Obando');
    expect(remove_surname('Maricruz Muñoz Aquino')).toBe('Maricruz Muñoz');
  });

});

describe('Complete line', () => {
  test('convert line', () => {
    let line = [];
    let result = [];
    line = ['1', 'Loreto Sepúlveda Torres', 'A12345678', '24/06/2021', '83'];
    result = ['1', 'Loreto Sepúlveda', 'A12345678@tec.mx', '06/24/2021', 'B'];
    expect(new_format(line)).toStrictEqual(result);
    line = ['2', 'Yessica Castillo Noguera', 'A12346541', '24/06/2021', '93'];
    result = ['2', 'Yessica Castillo', 'A12346541@tec.mx', '06/24/2021', 'A'];
    expect(new_format(line)).toStrictEqual(result);
    line = ['3', 'Valentín Caro García', 'A12345696', '18/12/2021', '75'];
    result = ['3', 'Valentín Caro', 'A12345696@tec.mx', '12/18/2021', 'C'];
    expect(new_format(line)).toStrictEqual(result);
    //expect(new_format(['a', 'b', 'c'])).toThrow();
  });

});
