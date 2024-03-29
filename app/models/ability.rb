class Ability

  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    if user.role? :admin

      
   
      can :manage, :all
      can :create,  :all 
      can :read, :all
      can :update, :all
      can :delete, :all
    else
    
      can :read, :all
    end
  end
end