module ObservationsHelper

  def gibbs_units
    ['kJ/M','J/M','kJ/M EA', 'kJ/M ED', 'kJ/M/e','J/M EA', 'J/M ED', 'J/M/e']
  end

  def rate_units
     ['M/s','M/h','M/year','mM/s','mM/h','mM/year','uM/s','uM/h','uM/year']   
  end

  def first_author(ref)
    ref.split(/,\s*/)[0..1].join(', ') + ', ' + ref.match(/[0-9]{4}/).try(:to_s)
  end
end
