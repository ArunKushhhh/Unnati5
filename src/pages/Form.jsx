import React, { useState } from 'react'
import { supabase } from '../lib/supabase'

function Form() {
  const [formData, setFormData] = useState({
    teamName: '',
    year: '',
    leaderName: '',
    leaderRegNo: '',
    leaderContact: '',
    member1Name: '',
    member1RegNo: '',
    member1Contact: '',
    member2Name: '',
    member2RegNo: '',
    member2Contact: '',
    team: 'Team A' 
  });

  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: '', message: '' })
    }
  };

  const validateForm = () => {
    const requiredFields = [
      { field: 'teamName', label: 'Team Name' },
      { field: 'year', label: 'Year' },
      { field: 'leaderName', label: 'Leader Name' },
      { field: 'leaderRegNo', label: 'Leader Registration Number' },
      { field: 'leaderContact', label: 'Leader Contact Number' },
      { field: 'member1Name', label: 'Member 1 Name' },
      { field: 'member1RegNo', label: 'Member 1 Registration Number' },
      { field: 'member1Contact', label: 'Member 1 Contact Number' },
      { field: 'team', label: 'Team Category' }
    ]

    for (const { field, label } of requiredFields) {
      if (!formData[field].trim()) {
        return `${label} is required`
      }
    }

    const phoneRegex = /^[6-9]\d{9}$/
    if (!phoneRegex.test(formData.leaderContact)) {
      return 'Leader contact number must be a valid 10-digit Indian mobile number'
    }
    if (!phoneRegex.test(formData.member1Contact)) {
      return 'Member 1 contact number must be a valid 10-digit Indian mobile number'
    }
    if (formData.member2Contact && !phoneRegex.test(formData.member2Contact)) {
      return 'Member 2 contact number must be a valid 10-digit Indian mobile number'
    }

    const regNoRegex = /^[A-Za-z0-9]+$/
    if (!regNoRegex.test(formData.leaderRegNo)) {
      return 'Leader registration number should only contain letters and numbers'
    }
    if (!regNoRegex.test(formData.member1RegNo)) {
      return 'Member 1 registration number should only contain letters and numbers'
    }
    if (formData.member2RegNo && !regNoRegex.test(formData.member2RegNo)) {
      return 'Member 2 registration number should only contain letters and numbers'
    }

    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm()
    if (validationError) {
      setSubmitStatus({ type: 'error', message: validationError })
      return
    }

    setLoading(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      const { data: existingTeam, error: checkError } = await supabase
        .from('Registration')
        .select('teamName')
        .eq('teamName', formData.teamName)
        .single()

      if (checkError && checkError.code !== 'PGRST116') {
        throw new Error('Failed to verify team name uniqueness')
      }

      if (existingTeam) {
        setSubmitStatus({ 
          type: 'error', 
          message: 'A team with this name already exists. Please choose a different team name.' 
        })
        setLoading(false)
        return
      }


      const { error } = await supabase.from('Registration').insert([{
        ...formData,
        created_at: new Date().toISOString()
      }])

      if (error) {
        console.error('Supabase error:', error)
        
        if (error.code === '42501') {
          setSubmitStatus({ 
            type: 'error', 
            message: 'Permission denied. Please contact support if this issue persists.' 
          })
        } else {
          setSubmitStatus({ 
            type: 'error', 
            message: 'Registration failed. Please check your internet connection and try again.' 
          })
        }
      } else {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Team registered successfully! Team members can participate in multiple teams with different team names.' 
        })
        
        setFormData({
          teamName: '',
          year: '',
          leaderName: '',
          leaderRegNo: '',
          leaderContact: '',
          member1Name: '',
          member1RegNo: '',
          member1Contact: '',
          member2Name: '',
          member2RegNo: '',
          member2Contact: '',
          team: 'Team A' 
        })
      }
    } catch (error) {
      console.error('Unexpected error:', error)
      setSubmitStatus({ 
        type: 'error', 
        message: 'An unexpected error occurred. Please try again or contact support if the problem persists.' 
      })
    }

    setLoading(false)
  };

  return (
    <div className="min-h-screen bg-[#11001b] flex items-center justify-center p-4 relative overflow-hidden">
      <div className='absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute top-20 right-20 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-700'></div>
      <div className='absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
      <div className='absolute bottom-10 right-10 w-64 h-64 bg-blue-500/25 rounded-full blur-2xl animate-pulse delay-300'></div>
      
      <button 
        onClick={() => window.history.back()}
        className="absolute top-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 group"
      >
        <svg 
          className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>

      <div className="w-full max-w-2xl relative z-10">
        <div className="relative group">
          <div className='absolute -inset-6 bg-blue-500/30 rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 transition duration-700 animate-pulse'></div>
          <div className='absolute -inset-4 bg-gradient-to-r from-blue-400/40 via-cyan-400/40 to-purple-400/40 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-700'></div>
          <div className='absolute -inset-2 bg-gradient-to-r from-blue-400/60 via-cyan-400/60 to-blue-400/60 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500'></div>
          
          <div className="relative bg-[#11001b]/90 backdrop-blur-xl border border-blue-400/40 rounded-3xl p-8 shadow-2xl"
               style={{
                 boxShadow: `
                   0 0 40px rgba(59, 130, 246, 0.4),
                   0 0 80px rgba(59, 130, 246, 0.2),
                   0 0 120px rgba(59, 130, 246, 0.1),
                   inset 0 1px 0 rgba(59, 130, 246, 0.1),
                   inset 0 -1px 0 rgba(59, 130, 246, 0.05)
                 `
               }}>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome to Unnati V</h1>
            <p className="text-gray-300">Register your team for the competition</p>
          </div>

          {submitStatus.message && (
            <div className={`mb-6 p-4 rounded-lg border backdrop-blur-md ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/10 border-green-400/40 text-green-300' 
                : 'bg-red-500/10 border-red-400/40 text-red-300'
            }`}>
              <div className="flex items-center gap-3">
                {submitStatus.type === 'success' ? (
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
                <p className="text-sm font-medium">{submitStatus.message}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Team Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 bg-white/5 backdrop-blur-md border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 hover:bg-white/10 ${
                  submitStatus.type === 'error' && !formData.teamName.trim()
                    ? 'border-red-400/60 focus:border-red-400/80 focus:ring-2 focus:ring-red-400/30 focus:shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                    : 'border-white/20 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/30 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                }`}
                placeholder="Enter team name"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Year <span className="text-red-400">*</span>
              </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-white/10"
              >
                <option value="" className="bg-[#11001b] text-gray-300">Select year</option>
                <option value="FE" className="bg-[#11001b] text-white">FE</option>
                <option value="SE" className="bg-[#11001b] text-white">SE</option>
              </select>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-blue-400/40 pb-2">Leader Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Leader Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="leaderName"
                    value={formData.leaderName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-white/10"
                    placeholder="Enter leader name"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Leader Reg No <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="leaderRegNo"
                    value={formData.leaderRegNo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-white/10"
                    placeholder="Enter registration number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Leader Contact Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="leaderContact"
                  value={formData.leaderContact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-white/10"
                  placeholder="Enter contact number"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-blue-400/40 pb-2">Member 1 Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Member 1 Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="member1Name"
                    value={formData.member1Name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-white/10"
                    placeholder="Enter member 1 name"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Member 1 Reg No <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="member1RegNo"
                    value={formData.member1RegNo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-white/10"
                    placeholder="Enter registration number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Member 1 Contact <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="member1Contact"
                  value={formData.member1Contact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-white/10"
                  placeholder="Enter contact number"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-blue-400/40 pb-2">Member 2 Details (Optional)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Member 2 Name
                  </label>
                  <input
                    type="text"
                    name="member2Name"
                    value={formData.member2Name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-white/10"
                    placeholder="Enter member 2 name"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Member 2 Reg No
                  </label>
                  <input
                    type="text"
                    name="member2RegNo"
                    value={formData.member2RegNo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-white/10"
                    placeholder="Enter registration number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Member 2 Contact
                </label>
                <input
                  type="tel"
                  name="member2Contact"
                  value={formData.member2Contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-white/10"
                  placeholder="Enter contact number"
                />
              </div>
            </div>


            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-blue-400/40 pb-2">Team Reference</h3>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Select Team <span className="text-red-400">*</span>
                </label>
                <select
                  name="team"
                  value={formData.team}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-white/10"
                >
                  <option value="Team A" className="bg-[#11001b] text-white">Team A</option>
                  <option value="Team B" className="bg-[#11001b] text-white">Team B</option>
                </select>
                
              </div>
            </div>

            <div className="pt-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`relative w-full ${
                    loading 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500'
                  } text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform ${
                    !loading && 'hover:scale-[1.02] hover:shadow-2xl'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent flex items-center justify-center gap-3 group overflow-hidden`}
                >
                  {!loading && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  )}
                  
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="relative z-10 text-lg">Registering Team...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10 text-lg">Register Team</span>
                      <svg 
                        className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
