# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "live-developer-journal"
  spec.version       = "0.1.0"
  spec.authors       = ["Becca Williams"]
  spec.email         = ["becca@essentialistdev.com"]

  spec.summary       = "Live Developer Journal Jekyll theme for documenting what you learn as you learn it. Export your brain to become a better developer."
  spec.homepage      = "https://gitlab.com/EssentialistDev/live-developer-journal-theme/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
