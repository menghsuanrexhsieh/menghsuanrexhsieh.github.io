source "https://rubygems.org"

# The github-pages gem pins Jekyll and all plugin versions to exactly
# what GitHub Pages runs in production, so what you see locally matches
# what gets deployed.
gem "github-pages", group: :jekyll_plugins

# Needed to run `bundle exec jekyll serve` on Ruby 3.0+.
gem "webrick", "~> 1.8"

# Platform-specific gems (harmless on macOS/Linux).
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
