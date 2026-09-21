import {useState} from 'react';
import {Link, useNavigate} from 'react-router';
import type {Route} from './+types/($locale).account_.register';

export const meta: Route.MetaFunction = () => {
  return [{title: 'Create Account | EVOL'}];
};

const COUNTRY_CODES = [
  {code: '+971', country: 'AE'},
  {code: '+1', country: 'US'},
  {code: '+44', country: 'GB'},
  {code: '+91', country: 'IN'},
  {code: '+61', country: 'AU'},
  {code: '+966', country: 'SA'},
  {code: '+33', country: 'FR'},
  {code: '+49', country: 'DE'},
  {code: '+39', country: 'IT'},
  {code: '+34', country: 'ES'},
];

interface FormData {
  firstName: string;
  lastName: string;
  countryCode: string;
  phone: string;
  email: string;
  password: string;
  consent: boolean;
}

interface PasswordRequirements {
  minLength: boolean;
  hasLower: boolean;
  hasUpper: boolean;
  hasNumber: boolean;
  hasSpecial: boolean;
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    countryCode: '+971',
    phone: '',
    email: '',
    password: '',
    consent: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getPasswordRequirements = (password: string): PasswordRequirements => ({
    minLength: password.length >= 8,
    hasLower: /[a-z]/.test(password),
    hasUpper: /[A-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  });

  const passwordReqs = getPasswordRequirements(formData.password);
  const allReqsMet = Object.values(passwordReqs).every(Boolean);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {name, value, type} = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!allReqsMet) {
      setError('Please meet all password requirements.');
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Integrate with your authentication backend
      // This is a placeholder for your custom registration logic
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: `${formData.countryCode}${formData.phone}`,
          email: formData.email,
          password: formData.password,
          consent: formData.consent,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed. Please try again.');
      }

      // Navigate to account dashboard on successful registration
      navigate('/account/orders');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-2xl font-semibold text-center mb-8 text-gray-900">
          Create an account
        </h1>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name Field */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition"
              placeholder="John"
            />
          </div>

          {/* Last Name Field */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition"
              placeholder="Doe"
            />
          </div>

          {/* Phone Number Field with Country Code */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone number
            </label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="px-3 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition"
              >
                {COUNTRY_CODES.map(({code, country}) => (
                  <option key={code} value={code}>
                    {code} {country}
                  </option>
                ))}
              </select>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition"
                placeholder="Phone number"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition"
              placeholder="your@email.com"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition pr-12"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Password Requirements */}
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm font-medium text-gray-700 mb-3">Your password must contain:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${
                    passwordReqs.minLength ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {passwordReqs.minLength ? '✓' : '○'}
                </span>
                At least 8 characters
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${
                    passwordReqs.hasLower ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {passwordReqs.hasLower ? '✓' : '○'}
                </span>
                Lower case letters (a-z)
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${
                    passwordReqs.hasUpper ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {passwordReqs.hasUpper ? '✓' : '○'}
                </span>
                Upper case letters (A-Z)
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${
                    passwordReqs.hasNumber ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {passwordReqs.hasNumber ? '✓' : '○'}
                </span>
                Numbers (0-9)
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${
                    passwordReqs.hasSpecial ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {passwordReqs.hasSpecial ? '✓' : '○'}
                </span>
                Special characters (e.g. @#$%^&*)
              </li>
            </ul>
          </div>

          {/* Marketing Consent Checkbox */}
          <div className="flex items-start gap-2 py-2">
            <input
              id="consent"
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-gray-600 bg-gray-100 rounded focus:ring-2 focus:ring-gray-400"
            />
            <label htmlFor="consent" className="text-sm text-gray-600">
              Yes, I'd like to receive special offers, promotions, or other e-mail marketing
              communications from Evol and its affiliated brands.
            </label>
          </div>

          {/* Privacy Link */}
          <p className="text-xs text-gray-600">
            To find out how we process and protect your personal information visit our{' '}
            <Link to="/privacy-policy" className="underline hover:no-underline">
              privacy policy
            </Link>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !allReqsMet}
            className="w-full py-3 px-4 bg-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {isLoading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-700">
            Already have an account?{' '}
            <Link
              to="/account/login"
              className="font-semibold text-gray-900 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
